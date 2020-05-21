const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post) => {
    createPage({
      path: post.node.id,
      component: path.resolve(`./src/templates/post.tsx`),
      context: {
        id: post.node.id,
      },
    });
  });
};
