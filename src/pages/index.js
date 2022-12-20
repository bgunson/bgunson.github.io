import * as React from "react"
import Layout from "../components/layout"
import LangIcon from "../components/lang-icon"

import MyLinks from '../components/my-links'
import BlogPosts from '../components/blog-posts'
import LangChart from "../components/lang-chart"
import Interests from "../components/interests"

import * as styles from "../styles/Home.module.css"

import { graphql } from "gatsby";

// markup
const HomePage = ({ data }) => {

  const lastBuild = data.allSiteBuildMetadata.nodes[0].buildTime;
  const user = data.github.user;

  const meta = data.allSite.nodes[0].siteMetadata;
  const { config, title, description } = meta

  const blogPosts = data.allFeedBlog.nodes || [{ summary: 'No posts yet, please check in the future.' }];

  const repos = data.github.user.pinnedItems.nodes;

  return (
    <Layout buildTime={lastBuild} title={title} description={description}>
      {/* <div id="sketch"></div> */}
      <div className={styles.container}>
        <h1 className={styles.title}>
          Hi, I'm {user.name.split(' ')[0]}
        </h1>

        <section style={{ textAlign: 'center', marginTop: '20px' }}>
          <span className={styles.description}>
            {user.bio.split(',').join('\n')}
          </span>
        </section>

        <Interests interests={config.interests} />

        <section>
          <LangChart repos={user.repositories} blurbs={config.languages} />
        </section>

        <section className={styles.projects}>
          <div className={styles.inline}>
            <h2>
              Projects
            </h2>
            <a href={`https://github.com/${user.login}?tab=repositories`}>See All &rarr;</a>
          </div>
          <div className={styles.grid}>
            {
              repos.map((repo) => {
                if (!repo) return null;
                const total = repo.languages.edges.map(l => l.size).reduce((val, acc) => val + acc)
                return (
                  <a key={repo.id} href={repo.url} className={styles.card}>
                    <h2 style={{ textAlign: 'left' }}>{repo.name} &rarr;</h2>
                    <p>
                      {repo.description?.length > 100 ? repo.description.slice(0, 100) + '...' : repo.description}
                    </p>
                    <div style={{ position: 'absolute', bottom: '15px', width: '105%', display: 'flex' }}>
                      {
                        repo.languages.edges.map(lang => {
                          var prop = {
                            name: lang.node.name,
                            color: lang.node.color,
                            size: lang.size,
                            percentile: Math.round((lang.size / total) * 1000) / 10
                          }
                          return <LangIcon key={prop.name + prop.percentile} {...prop} />
                        })
                      }
                    </div>
                  </a>
                )
              }
              )
            }

            {/* <a href={`https://github.com/${user.login}?tab=repositories`} className={styles.card}>
              <h2 style={{ textAlign: 'left' }}>See All &rarr;</h2>
            </a> */}
          </div>
        </section>

        <section>
          <BlogPosts props={{ config: config.blog, posts: blogPosts }} />
        </section>

        <section>
          <MyLinks props={config.links} />
        </section>

      </div>

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
            github {
              showcase
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
        bioHTML
        avatarUrl
        name
        login
        location
      }
    }
  }
`