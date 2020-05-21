import Page from "../../components/page";
import path from "path";
import fs from "fs";
import LiveEditor from "../../components/liveEditor";
import Markdown from "../../components/Markdown";
import { transformContent, Token, pulckHtmlCss } from "../../lib/transform";
import { Props as MenuProps, Section } from "../../components/menu";

const fetchSections = (): Section[] => {
  const postsDirectory = path.join(process.cwd(), "contents");
  const sectionDirectories = fs.readdirSync(postsDirectory);
  return sectionDirectories.map((section) => {
    const filenames = fs.readdirSync(path.join(postsDirectory, section));
    return {
      title: section,
      items: filenames.map((name) => ({
        title: name,
        path: `${section}.${name}`,
      })),
    };
  });
};

const loadContent = (filename: string): Token[] => {
  const filePath = path.join(process.cwd(), "contents", filename);
  const fileContents = fs.readFileSync(path.join(filePath), "utf8");
  const content = transformContent(fileContents);
  return content;
};

export async function getStaticPaths() {
  const contents = fetchSections().map((section: Section) =>
    section.items.map((item) => ({
      params: { page: item.path },
    }))
  );
  // flatten
  const paths = Array.prototype.concat.apply([], contents);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  // HACK section1.demoみたいになっているのでsection1/demoにする
  const path = params.page.replace(".", "/");
  const props: Props = {
    post: {
      contents: loadContent(path),
    },
    sections: fetchSections(),
  };
  return {
    props,
  };
}

interface Props {
  post: {
    contents: Token[];
  };
  sections: Section[];
}

const App: React.FC<Props> = ({ post, sections }) => {
  // linkを外から入れらるようになった。
  const menuProps: MenuProps = {
    LinkComponent: (item: any) => {
      return <a href={item.item.path}>{item.item.title}</a>;
    },
    sections,
  };

  const commonCSS = pulckHtmlCss(
    post.contents.find((c) => c.type === "common-css")?.value || ""
  ).css;

  const Content = () => (
    <div style={{ padding: "40px" }}>
      {post.contents.map((content: Token, i: number) => {
        const key = `${content.type}-${i}`;
        if (content.type === "markdown" || content.type === "common-css") {
          return <Markdown key={key} content={content.value} />;
        }
        if (content.type === "frontmatter") {
          return (
            <div key={key}>
              <h1>{content.value.title}</h1>
            </div>
          );
        }
        return <LiveEditor key={key} {...{ commonCSS, ...content.value }} />;
      })}
    </div>
  );
  return <Page content={<Content />} menu={menuProps} />;
};

export default App;
