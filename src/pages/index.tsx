import React from "react";
import Page from "../components/page";
import LiveEditor from "../components/liveEditor";
import Markdown from "../components/markdown";
import { transformContent, Token, pulckHtmlCss } from "../lib/transform";
import { Props as MenuProps, Section } from "../components/menu";

import { graphql, Link } from "gatsby";

export const query = graphql`
  {
    post: markdownRemark(id: { eq: "ab1ff15f-ca56-5c3b-a7ac-3014bc477566" }) {
      id
      rawMarkdownBody
    }

    sections: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            section
            title
          }
        }
      }
    }
  }
`;

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

export default ({ data }) => {
  console.log(data.post);
  const contents = transformContent(data.post.rawMarkdownBody);

  const sections = {};
  data.sections.edges.forEach((edge) => {
    const { section, title } = edge.node.frontmatter;
    if (!sections[section]) {
      sections[section] = [];
    }
    sections[section].push({
      title: title,
      path: edge.node.id,
    });
  });

  const props = {
    post: {
      contents,
    },
    sections: Object.keys(sections).map((key) => {
      return {
        title: "hoge",
        items: sections[key],
      };
    }),
  };

  console.log(props);
  return <App {...props} />;
};
