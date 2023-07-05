const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions;

  const {
    data: { allWpPage: { edges: alPages }},
  } = await graphql(`
    query {
        allWpPage {
            edges {
              node {
                content
                id
                slug
                title
                uri
                guid
              }
            }
        }
    }
  `);


  const postTemplate = path.resolve(`./src/templates/page.js`);

  alPages.forEach((page) => {
    createPage({
      // will be the url for the page
      path: page.node.uri,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: page.node.id,
        title: page.node.title,
        html: page.node.content,
        pageId: page.node?.guid?.split("page_id=")[1] || "",
        guid: page.node.guid
      },
    });
  });
};