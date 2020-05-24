import React from "react";
import Page from "../components/page";
import { graphql } from "gatsby";
import { convertDataToProps } from "../components/content";

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
  const props = convertDataToProps(data);
  return <Page {...props} />;
};
