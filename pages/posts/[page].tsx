import App from "../../components/page";
import path from "path";
import fs from "fs";
import LiveEditor from "../../components/liveEditor";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { transformContent, Token, pulckHtmlCss } from "../../lib/transform";
import { Props as MenuProps } from "../../components/menu";

interface Section {
  title: string;
  items: {
    title: string;
    path: string;
  }[];
}

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

const _MDWapper = styled.div`
  h1,
  h2,
  h3,
  h4 {
    color: var(--theme-color);
  }
`;

const MarkdownBlock = ({ content }: { content: string }) => (
  <_MDWapper>
    <ReactMarkdown source={content} />
  </_MDWapper>
);

// これでlinkを外から入れらるようになった。
// mdからメニューを取得してページングできるはず。
// ぱすぱらむを取得すれば（static prposで)
const createProps = (sections: Section[]): MenuProps => ({
  LinkComponent: (item: any) => {
    return <a href={item.item.path}>{item.item.title}</a>;
  },
  sections,
});

const Page: React.FC<Props> = ({ post, sections }) => {
  const menuProps = createProps(sections);

  const commonCSS = pulckHtmlCss(
    post.contents.find((c) => c.type === "common-css")?.value || ""
  ).css;

  const Content = () => (
    <div style={{ padding: "40px" }}>
      {post.contents.map((content: Token, i: number) => {
        const key = `${content.type}-${i}`;
        if (content.type === "markdown" || content.type === "common-css") {
          return <MarkdownBlock key={key} content={content.value} />;
        }
        if (content.type === "frontmatter") {
          return (
            <_MDWapper key={key}>
              <h1>{content.value.title}</h1>
            </_MDWapper>
          );
        }
        return <LiveEditor key={key} {...{ commonCSS, ...content.value }} />;
      })}
    </div>
  );
  return <App content={<Content />} menu={menuProps} />;
};

export default Page;
