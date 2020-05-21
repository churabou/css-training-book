import React from "react";
import Page from "../components/page";
import { transformContent, Token, pulckHtmlCss } from "../lib/transform";
import { graphql, Link } from "gatsby";
import { createPageProps } from "../pages";

export const pageQuery = graphql`
  query markdown($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
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
export default ({ data }) => {
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

  return <Page {...createPageProps(props)} />;
};
