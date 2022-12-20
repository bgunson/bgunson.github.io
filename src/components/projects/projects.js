import * as React from 'react';
import { Fade } from 'react-reveal';
import * as styles from '../../styles/Home.module.css';
import LangIcon from './lang-icon';

const Projects = ({ user }) => {
    const repos = user.pinnedItems.nodes;
    return (
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
                            <Fade key={repo.id} bottom duration={1000}
                                delay={500}
                                distance="30px">
                                <a href={repo.url} className={styles.card}>
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
                            </Fade>
                        )
                    }
                    )
                }

                {/* <a href={`https://github.com/${user.login}?tab=repositories`} className={styles.card}>
              <h2 style={{ textAlign: 'left' }}>See All &rarr;</h2>
            </a> */}
            </div>
        </section>
    )

}

export default Projects;