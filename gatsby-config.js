const config = require('./my-config');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Hi, I'm Bennett`,
    author: 'Bennett Gunson',
    keywords: 'software, developer, full stack, web design, web developer',
    description: `Computer Science student, Software Developer, Outdoorsman`,
    siteUrl: `https://bengunson.me`,
    config: config
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest', 
      options: {
        icon: 'src/images/favicon.png',
        name: "Bennett Gunson",
        short_name: "bengunson",
        start_url: "/",
        background_color: "black",
        theme_color: "orange",
        display: "minimal-ui",
      }
    },
    {
      resolve: 'gatsby-source-rss-feed',
      options: {
        url: config.blog.feedURL,
        name: 'Blog'
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`
        }
      }
    }
  ]
}