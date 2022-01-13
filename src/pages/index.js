import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/Home.module.css"

import { graphql } from "gatsby";

// import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { 
  FaTree, 
  FaDocker, 
  FaGithub, 
  FaLinkedin, 
  FaBlog, 
  FaFish, 
  FaBeer, 
  FaMountain, 
  FaCar, 
  FaLaptopCode, 
  FaEnvelope, 
  FaBiking 
} from 'react-icons/fa';

import { user, repos } from "../data/git"

// markup
const HomePage = ({ data }) => {

  const firstName = user.name.split(' ')[0];
  const blogPosts = data.allFeedBenBlog.nodes || [{summary: 'No posts yet, please check in the future.'}];


  return (
    <Layout>
      <div className={styles.container}>
        {/* <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label className={styles.themer}>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              Dark mode
            </label>
          )}
        </ThemeToggler> */}
        <main className={styles.main}>
          <h1 className={styles.title}>
            Hi, I'm { firstName }
          </h1>

          {/* <Image src={user.avatar_url} alt="Avatar" width={256} height={256} /> */}

          {/* <h2>{user.login}</h2> */}

          <p className={styles.description}>
            { user.bio || 'Bio' }
          </p>

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

          <h2>Projects</h2>
          <div className={styles.grid}>
            {
              repos
                .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
                .slice(0, 8)
                .map((repo) => {
                  return (
                    <a href={repo.html_url} className={styles.card}>
                      <h2>{ repo.name } &rarr;</h2>
                      <p>
                        { repo.description?.length > 100 ? repo.description.slice(0, 100) + '...' : repo.description }
                      </p>

                      <span className="styles.repo-lang">Langauge: { repo.language }</span>
                    </a>
                  )
                }
              )
            }

            <a href={`https://github.com/${user.login}?tab=repositories`}className={styles.card}>
              <h2>See All &rarr;</h2>
            </a>
          </div>

          <h2>Recent Blog Posts</h2>
          <div className={styles.container}>
            {
              blogPosts.map(post => {
                return (
                  <a href={post.link}>
                    <h2>{ post.title } <small>{ post.pubDate ? '| ' + post.pubDate : ''}</small></h2>
                    <p>{ post.summary.length > 500 ? post.summary.slice(0, 500) +  '...' : post.summary }</p>
                    <hr></hr>
                  </a>
                )
              })
            }
          </div>

          <h2>My Links</h2>
          <p>
            <a className={styles.linkicon} href="https://github.com/bgunson" aria-label="GitHub"><FaGithub size={36}/></a>
            <a className={styles.linkicon} href="https://hub.docker.com/u/bgunson" aria-label="DockerHub"><FaDocker size={36}/></a>
            <a className={styles.linkicon} href="https://www.linkedin.com/in/bennett-gunson/" aria-label="LinkedIn"><FaLinkedin size={36}/></a>
            <a className={styles.linkicon} href="https://bengunson.me/blog" aria-label="Blog"><FaBlog size={36} /></a>
            <a className={styles.linkicon} href="mailto:bengunson@gmail.com" aria-label="Email"><FaEnvelope size={36}/></a>
          </p>
        </main>

        <footer 
          className={styles.footer} 
          style={{
            backgroundColor: 'var(--bg)',
            color: 'var(--textNormal)',
            transition: 'color 0.2s ease-out, background 0.2s ease-out',
          }}>
          { user.name }
          <span className={styles.logo}>
            <FaTree/>&nbsp;<FaBeer/>&nbsp;<FaFish/>&nbsp;<FaBiking/>&nbsp;<FaMountain/>&nbsp;<FaCar/>&nbsp;<FaLaptopCode/>
          </span>
        </footer>
      </div>

    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query BlogQuery {
    allFeedBenBlog {
      nodes {
        id
        summary
        title
        link
        pubDate(formatString: "MMMM DD, YYYY")
      }
    }
  }
`