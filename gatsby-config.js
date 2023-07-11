/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `test-task`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "https://tgibfnov2022.click/graphql",
      html: {
        useGatsbyImage: false,
        createStaticFiles: false,
      },
      production: {
        allow404Images: true,
        allow401Images: true
      },
      schema: {
        perPage: 2,
        timeout: 600000000
      }
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-netlify"]
};