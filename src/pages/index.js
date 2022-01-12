import * as React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/Home.module.css"

import { FaTree, FaDocker, FaGithub, FaLinkedin, FaBlog, FaFish, FaBeer, FaMountain, FaCar, FaCode, FaLaptopCode, FaEnvelope } from 'react-icons/fa';

import { user, repos } from "../data/git"

// markup
const HomePage = () => {

  const firstame = user.name.split(' ')[0];

  return (
    <Layout>
      <div className={styles.container}>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Hi, I'm { firstame }
          </h1>

          {/* <Image src={user.avatar_url} alt="Avatar" width={256} height={256} /> */}

          {/* <h2>{user.login}</h2> */}

          <p className={styles.description}>
            { user.bio || 'Bio' }
          </p>

          <h2>What Interests Me</h2>
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

          <h2>My Links</h2>
          <p>
            <a href="https://github.com/bgunson" aria-label="GitHub"><FaGithub /></a>
            &nbsp;&nbsp;
            <a href="https://hub.docker.com/u/bgunson" aria-label="DockerHub"><FaDocker /></a>
            &nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/bennett-gunson/" aria-label="LinkedIn"><FaLinkedin /></a>
            &nbsp;&nbsp;
            <a href="https://bengunson.me/blog" aria-label="Blog"><FaBlog /></a>
            &nbsp;&nbsp;
            <a href="mailto:bengunson@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </p>

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
        </main>

        <footer className={styles.footer}>
        {/* <svg height={32} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M23.922 13.58v3.912L20.55 18.72l-.078.055.052.037 3.45-1.256.026-.036v-3.997l-.053-.036-.025.092z M23.621 5.618l-3.04 1.107v3.912l3.339-1.215V5.509zM23.92 13.457V9.544l-3.336 1.215v3.913zM20.47 14.71V10.8L17.17 12v3.913zM17.034 19.996v-3.912l-3.313 1.206v3.912zM17.17 16.057v3.868l3.314-1.206V14.85l-3.314 1.206zm2.093 1.882c-.367.134-.663-.074-.663-.463s.296-.814.663-.947c.365-.133.662.075.662.464s-.297.814-.662.946z M13.225 9.315l.365-.132-3.285-1.197-3.323 1.21.102.037 3.184 1.16zM20.507 10.664V6.751L17.17 7.965v3.913zM17.058 11.918V8.005l-3.302 1.202v3.912zM13.643 9.246l-3.336 1.215v3.913l3.336-1.215zM6.907 13.165l3.322 1.209v-3.913L6.907 9.252z M10.34 7.873l3.281 1.193V5.198l-3.28-1.193zM20.507 2.715L17.19 3.922v3.913l3.317-1.207zM16.95 3.903L13.724 2.73l-3.269 1.19 3.225 1.174zM15.365 4.606l-1.624.592v3.868l3.317-1.207V3.991l-1.693.615zm-.391 2.778c-.367.134-.662-.074-.662-.464s.295-.813.662-.946c.366-.133.663.074.663.464s-.297.813-.663.946z M10.229 18.41v-3.914l-3.322-1.209V17.2zM13.678 17.182v-3.913l-3.371 1.227v3.913z M13.756 17.154l3.3-1.2V12.04l-3.3 1.2zM13.678 21.217l-3.371 1.227v-3.912h-.078v3.912l-3.322-1.209v-3.913l-.053-.058-.025-.06-3.336-1.21v-3.948l.034.013 3.287 1.196.015-.078-3.261-1.187 3.26-1.187v-.109L3.876 9.62l-.307-.112 3.26-1.188v.877l.079-.055V6.769l3.257 1.185.058-.061L7.084 6.75l-.102-.037 3.24-1.179v-.083L6.854 6.677v.018l-.025.018v1.523L3.44 9.47v.02l-.025.017v4.007l-3.39 1.233v.019L0 14.784v3.995l.025.037 3.4 1.237.008-.006.007.01 3.4 1.238.008-.006.006.01 3.4 1.237.014-.009.012.01 3.45-1.256.026-.037-.078-.027zM3.493 9.563l3.257 1.185-3.257 1.187V9.562zM3.4 19.96L.078 18.752v-3.913l2.361.86.96.349v3.913zm.015-3.99L.335 14.85l-.182-.066 3.262-1.187v2.374zm3.399 5.231l-3.321-1.209v-3.912l3.321 1.209v3.912zM23.791 5.434l-3.21-1.17v2.338zM20.387 2.643l-3.24-1.18-3.27 1.19 3.247 1.182z"/></svg> */}
        {/* <img alt="Gatsby G Logo" src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"/> */}
            { user.name }
            <span className={styles.logo}>
              <FaTree/>&nbsp;<FaBeer/>&nbsp;<FaFish/>&nbsp;<FaMountain/>&nbsp;<FaCar/>&nbsp;<FaLaptopCode/>
            </span>
        </footer>
      </div>

    </Layout>
  )
}

export default HomePage
