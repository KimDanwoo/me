/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const siteMetadata = {
  title: `프론트엔드 엔지니어 김단우`,
  author: {
    name: `김단우`,
    summary: `웹 프론트엔드 개발자입니다.`
  },
  description: `기록합니다.`,
  siteUrl: `https://chanhyuk.com`,
  thumbnail: `https://chanhyuk.com/og.png`
};

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        allExtensions: true
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`
  ]
};
