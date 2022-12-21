import * as React from "react"
import Layout from "../components/layout"

import * as styles from "../styles/Home.module.css"

import { graphql } from "gatsby";
import Header from "../components/header/header"
import About from "../components/about/about"
import Projects from "../components/projects/projects"
import Footer from "../components/footer/footer"
import Blog from "../components/blog/blog"

// markup
const HomePage = ({ data }) => {

  const user = data.github.user;

  const meta = data.allSite.nodes[0].siteMetadata;
  const { config, title, description } = meta;

  const blogPosts = data.allFeedBlog.nodes || [{ summary: 'No posts yet, please check in the future.' }];

  return (
    <Layout title={title} description={description}>
      <Header user={user}/>
      <main className={styles.container}>
        <About config={config} user={user}/>
        <Projects user={user}/>
        <Blog props={{ config: config.blog, posts: blogPosts }}/>
      </main>
      <Footer lastBuild={data.allSiteBuildMetadata.nodes[0].buildTime} links={config.links}/>
    </Layout>
  )
}

export default HomePage


//TODO: parameterize github login user 
export const query = graphql`
  query PageQuery {
    allSiteBuildMetadata {
      nodes {
        buildTime
      }
    }
    allSite {
      nodes {
        siteMetadata {
          title
          description
          config {
            blog {
              enable
              feedURL
            }
            links {
              name
              url
            }
            interests {
              name
              blurb
            }
            languages {
              name
              blurb
            }
          }
        }
      }
    }
    allFeedBlog {
      nodes {
        id
        summary
        title
        link
        pubDate(formatString: "MMMM DD, YYYY")
      }
    }
    github {
      user(login: "bgunson") { 
        repositories(orderBy: {field: UPDATED_AT, direction: DESC}, first: 30, privacy: PUBLIC) {
          nodes {
            id
            name
            url
            description
            languages(orderBy: {field: SIZE, direction: DESC}, first: 8) {
              edges {
                node {
                  id
                  name
                  color
                }
                size
              }
            }
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  id
                  name
                }
              }
            }
            languages(orderBy: {field: SIZE, direction: DESC}, first: 8) {
              edges {
                node {
                  id
                  name
                  color
                }
                size
              }
            }
          }
        }
        pinnedItems(first: 6) {
          nodes {
            ... on GitHub_Repository {
              id
              name
              url
              description
              languages(orderBy: {field: SIZE, direction: DESC}, first: 8) {
                edges {
                  node {
                    id
                    name
                    color
                  }
                  size
                }
              }
            }
          }
        }
        bio
        avatarUrl
        name
        login
        location
      }
    }
  }
`