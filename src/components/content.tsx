import React from "react";
import LiveEditor from "./liveEditor";
import Markdown from "./markdown";
import { Token, pulckHtmlCss, transformContent } from "../lib/transform";
import { Link } from "gatsby";
import { Props as MenuProps } from "./menu";

interface Props {
  post: {
    contents: Token[];
  };
}

export const convertDataToProps = (data) => {
  const contents = transformContent(data.post.rawMarkdownBody);

  const sectionMap = {};
  data.sections.edges.forEach((edge) => {
    const { section, title } = edge.node.frontmatter;
    if (!sectionMap[section]) {
      sectionMap[section] = [];
    }
    sectionMap[section].push({
      title: title,
      path: edge.node.id,
    });
  });

  const sections = Object.keys(sectionMap).map((key) => {
    return {
      title: "hoge",
      items: sectionMap[key],
    };
  });

  const menuProps: MenuProps = {
    LinkComponent: ({ item }: { item: { title: string; path: string } }) => {
      return (
        <Link to={`/${item.path}`} activeClassName="active">
          {item.title}
        </Link>
      );
    },
    sections,
  };

  return {
    post: {
      contents,
    },
    menu: menuProps,
  };
};
export const Content: React.FC<Props> = ({ post }) => {
  const commonCSS = pulckHtmlCss(
    post.contents.find((c) => c.type === "common-css")?.value || ""
  ).css;

  return (
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
};
