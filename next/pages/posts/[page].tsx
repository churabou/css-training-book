import App from "../../components/page";
import path from "path";
import fs from "fs";
import LiveEditor from "../../components/liveEditor";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { transformContent, Token } from "../../lib/transform";
import { Props as MenuProps } from "../../components/menu";

const fetchSections = () => {
  const postsDirectory = path.join(process.cwd(), "contents");
  const sectionDirectories = fs.readdirSync(postsDirectory);
  return sectionDirectories.map((section) => {
    const filenames = fs.readdirSync(path.join(postsDirectory, section));
    return {
      title: section,
      items: filenames.map((name) => ({
        name,
        filePath: `${section}.${name}`,
      })),
    };
  });
};

const loadContent = (name: string) => {
  const postsDirectory = path.join(process.cwd(), "contents", name);
  const filePath = path.join(postsDirectory);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const content = transformContent(fileContents);
  return content;
};

export async function getStaticPaths() {
  const contents = fetchSections().map((section) =>
    section.items.map((item) => ({
      params: { page: item.filePath, filePath: "hoge" },
    }))
  );

  // flatten
  const paths = Array.prototype.concat.apply([], contents);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const path = params.page.replace(".", "/");
  return {
    props: {
      post: {
        contents: loadContent(path),
      },
      sections: fetchSections(),
    },
  };
}

interface Post {
  contents: Token[];
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
const createProps = (sections: any): MenuProps => ({
  LinkComponent: (item: any) => {
    console.log(item);
    return (
      <span>
        <a href={item.item.filePath}>{item.item.name}</a>
      </span>
    );
  },
  sections,
});

export default function Home({
  post,
  sections,
}: {
  post: Post;
  sections: any;
}) {
  const menuProps = createProps(sections);
  const Content = () => (
    <div style={{ padding: "40px" }}>
      {post.contents.map((content: Token, i: number) => {
        if (content.type === "markdown") {
          return (
            <MarkdownBlock
              key={`${content.type}-${i}`}
              content={content.value}
            />
          );
        }
        if (content.type === "frontmatter") {
          return (
            <_MDWapper>
              <h1>{content.value.title}</h1>
            </_MDWapper>
          );
        }
        return <LiveEditor key={`${content.type}-${i}`} {...content.value} />;
      })}
    </div>
  );

  return <App content={<Content />} menu={menuProps} />;
}
