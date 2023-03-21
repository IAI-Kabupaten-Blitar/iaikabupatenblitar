const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve("src/templates/singlePost.js");
    const postsPageTemplate = path.resolve("src/templates/postsPage.js");
    const eventTemplate = path.resolve("src/templates/singleEvent.js");
    const eventsPageTemplate = path.resolve("src/templates/eventsPage.js");

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
        // Posts
        const posts = result.data.Posts.edges;
        const postsPerPage = 6;
        const numPages = Math.ceil(posts.length / postsPerPage);

        // Berita list page
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/berita` : `/berita/${i + 1}`,
            component: postsPageTemplate,
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          });
        });

        // Single Berita page
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

        // Events
        const events = result.data.Events.edges;
        const eventsPerPage = 4;
        const eventsNumPages = Math.ceil(events.length / eventsPerPage);

        // Kegiatan list page
        Array.from({ length: eventsNumPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/kegiatan` : `/kegiatan/${i + 1}`,
            component: eventsPageTemplate,
            context: {
              limit: eventsPerPage,
              skip: i * eventsPerPage,
              numPages: eventsNumPages,
              currentPage: i + 1,
            },
          });
        });

        // Single Kegiatan page
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
