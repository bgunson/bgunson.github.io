import * as React from "react"
import Layout from "../components/layout"
import { LangIcon } from "../components/lang-icon"

import { MyLinks } from '../sections/my-links'
import { BlogPosts } from '../sections/blog-posts'

import * as styles from "../styles/Home.module.css"

import { graphql } from "gatsby";

// import { SiteIcons } from '../components/site-icons'

import 'react-tooltip';



// markup
const HomePage = ({ data }) => {

  const user = data.github.user;
  const config = data.allSite.nodes[0].siteMetadata.config;
  const links = config.links;

  const blogPosts = data.allFeedBlog.nodes || [{summary: 'No posts yet, please check in the future.'}];

  const repos = data.github.user.repositories.nodes.filter(r => config.github.showcase.includes(r.name)) || [];


  return (
    <Layout>
      <div className={styles.container}>
          <h1 className={styles.title}>
            Hi, I'm { user.name.split(' ')[0] }
          </h1>

          {/* <Image src={user.avatar_url} alt="Avatar" width={256} height={256} /> */}

          {/* <h2>{user.login}</h2> */}

        <section>
        <p className={styles.description}>
            { user.bio || 'Bio' }
          </p>
        </section>

        <section>
        <h2>My Interests</h2>
          <div className={styles.interests}>
            <ul>
              <li>Computer networks</li>
              <li>IoT</li>
              <li>Devloping web applications</li>
            </ul>
            <ul>
              <li>Fly fishing</li>
              <li>Mountain and road biking</li>
              <li>DIY car maintenance</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Projects</h2>
          <div className={styles.grid}>
            {
              repos.map((repo) => {
                  const total = repo.languages.edges.map(l => l.size).reduce((val, acc) => val + acc)
                  return (
                    <a href={repo.url} className={styles.card}>
                      <h2 style={{ textAlign: 'left'}}>{ repo.name } &rarr;</h2>
                      <p>
                        {
                          repo.languages.edges.map(lang => {
                            var prop = {
                              name: lang.node.name,
                              color: lang.node.color,
                              size: lang.size,
                              percentile: Math.round((lang.size / total) * 1000) / 10
                            }
                            return <LangIcon {...prop}/>
                          })
                        }
                      </p>
                      <p>
                        { repo.description?.length > 100 ? repo.description.slice(0, 100) + '...' : repo.description }
                      </p>
                    </a>
                  )
                }
              )
            }

            <a href={`https://github.com/${user.login}?tab=repositories`}className={styles.card}>
              <h2 style={{ textAlign: 'left' }}>See All &rarr;</h2>
            </a>
          </div>
        </section>

          <BlogPosts props={{config: config.blog, posts: blogPosts}}/>

          <MyLinks props={links}/>

      </div>

    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query PageQuery {
    allSite {
      nodes {
        siteMetadata {
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
        repositories(orderBy: {field: UPDATED_AT, direction: DESC}, first: 30) {
          nodes {
            languages(orderBy: {field: SIZE, direction: DESC}, first: 10) {
              edges {
                node {
                  id
                  name
                  color
                }
                size
              }
            }
            id
            name
            url
            description
          }
        }
        bio
        avatarUrl
        name
        location
      }
    }
  }
`