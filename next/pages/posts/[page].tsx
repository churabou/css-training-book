import App from "../../components/page";
import path from "path";
import fs from "fs";
import LiveEditor from "../../components/liveEditor";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { transformContent, Token } from "../../lib/transform";
import { Props as MenuProps } from "../../components/menu";

export async function getStaticPaths() {
  // zeitが管理するレポジトリを(APIのデフォルトである)30件取得する

  const paths = ["/posts/hoge", "/posts/foo"];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), "contents");
  const sectionDirectories = fs.readdirSync(postsDirectory);

  const posts = sectionDirectories.map((section) => {
    const filenames = fs.readdirSync(path.join(postsDirectory, section));
    return filenames.map((filename) => {
      const filePath = path.join(postsDirectory, section, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      return {
        filename,
        contents: transformContent(fileContents),
      };
    });
  });

  return {
    props: {
      post: posts[0][0],
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
const sections: MenuProps = {
  LinkComponent: (item: any) => {
    console.log(item);
    return (
      <span>
        <a>aa</a>
        {item.item.title}
      </span>
    );
  },
  sections: [
    {
      title: "section1",
      items: [{ title: "hoge" }],
    },
    {
      title: "section2",
      items: [{ title: "hoge" }],
    },
  ],
};

export default function Home({ post }: { post: Post }) {
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

  return <App content={<Content />} menu={sections} />;
}
