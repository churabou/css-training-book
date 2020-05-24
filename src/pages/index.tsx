import React from "react";
import Page from "../components/page";
import { graphql } from "gatsby";
import { convertDataToProps } from "../components/content";

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

export default ({ data }) => {
  const props = convertDataToProps(data);
  return <Page {...props} />;
};
