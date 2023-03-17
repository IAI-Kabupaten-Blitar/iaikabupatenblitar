const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve("src/templates/singlePost.js");
    const eventTemplate = path.resolve("src/templates/singleEvent.js");

    resolve(
      graphql(
        `
          {
            Posts: allMarkdownRemark(
              sort: { order: ASC, fields: [frontmatter___date] }
              filter: { fileAbsolutePath: { regex: "/posts/" } }
            ) {
              edges {
                node {
                  frontmatter {
                    slug
                    title
                  }
                }
              }
            }
            Events: allMarkdownRemark(
              sort: { order: ASC, fields: [frontmatter___date] }
              filter: { fileAbsolutePath: { regex: "/events/" } }
            ) {
              edges {
                node {
                  frontmatter {
                    slug
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const posts = result.data.Posts.edges;
        const events = result.data.Events.edges;

        posts.forEach(({ node }, index) => {
          const slug = node.frontmatter.slug;
          createPage({
            path: `/berita/${slug}`,
            component: postTemplate,
            context: {
              pathSlug: slug,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          });
          resolve();
        });

        events.forEach(({ node }, index) => {
          const slug = node.frontmatter.slug;
          createPage({
            path: `/kegiatan/${slug}`,
            component: eventTemplate,
            context: {
              pathSlug: slug,
              prev: index === 0 ? null : events[index - 1].node,
              next: index === events.length - 1 ? null : events[index + 1].node,
            },
          });
          resolve();
        });
      })
    );
  });
};
