const config = require('./config');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    siteMetadata: {
      title: `Bennett Gunson`,
      description: `Computer Science student, Software DEveloper, Outdoorsman`,
      siteUrl: `https://bengunson.me`,
      config: config
    },
    plugins: [
      'gatsby-plugin-dark-mode',
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