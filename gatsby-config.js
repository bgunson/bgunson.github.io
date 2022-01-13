module.exports = {
    siteMetadata: {
      title: `Bennett Gunson`,
      siteUrl: `https://bengunson.me`,
    },
    plugins: [
      'gatsby-plugin-dark-mode',
      {
        resolve: 'gatsby-source-rss-feed',
        options: {
          url: 'https://bengunson.me/blog/feed.xml',
          name: 'BenBlog'
        }
      }
    ]
}