import * as React from 'react';
import { Fade } from 'react-reveal';
import * as styles from '../../styles/Home.module.css';
import { SiteIcons } from '../shared/site-icons';
import LangChart from './lang-chart';
import LangIcon from './lang-icon';

const Projects = ({ user, config }) => {

    const pinnedRepos = user.pinnedItems.nodes.map(item => user.repositories.nodes.find(r => r.id === item.id));

    const [filter, setFilter] = React.useState();
    const [repos, setRepos] = React.useState(pinnedRepos);
    const [showRepos, setShowRepos] = React.useState();

    const topics = {};
    user.repositories.nodes.forEach(repo => {
        repo.repositoryTopics.nodes.forEach(t => {
            topics[t.topic.id] = t.topic.name;
        });
    });

    const handleFilterClick = (f) => {
        let show = [];

        if (f === null) {
            setShowRepos(false);
            setFilter(null);
            show = pinnedRepos;
        } else if (filter?.value === f.value) {
            show = repos;
        } else {
            setShowRepos(false);
            setFilter(f);
            if (f.type === 'language') {
                show = user.repositories.nodes.filter(repo => repo.languages.edges.map(e => e.node.name.toLowerCase()).includes(f.value.toLowerCase()));
                show = show.slice(0, 6);
            } else if (f.type === 'topic') {
                show = user.repositories.nodes.filter(repo => repo.repositoryTopics.nodes.find(t => t.topic.id === f.value));
            } else {
                show = pinnedRepos;
            }
        }
        setRepos(show);
        setTimeout(() => {
            setShowRepos(true);
            document.querySelector("#projects").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 500);
    }

    const activeTopicStyle = {
        'cursor': 'pointer',
        'backgroundColor': '#1a74dc',
        'color': 'white'
    };


    return (
        <section id="skills">
            <div className={styles.grid}>
                <Fade left>
                    <LangChart repos={user.repositories} blurbs={config.languages} onSelect={(l) => handleFilterClick({value: l, type: 'language'})}/>
                </Fade>
                <Fade right cascade>
                    <div className={styles.topics}>
                        <div style={{ textAlign: 'center' }}>
                            <h2 style={{ marginBottom: '30px' }}>Topics I've Explored</h2>
                            <div className={styles.interests} style={{ margin: '0 10%', marginBottom: '8%' }}>
                                {
                                    Object.entries(topics).map(([id, name]) => {
                                        const activeStyle = filter?.value === id ? activeTopicStyle : null;
                                        return (

                                            <span key={id} role="button" tabIndex={-1} className={styles.topic} style={activeStyle} onClick={() => handleFilterClick({value: id, type: 'topic'})} onKeyDown={() => handleFilterClick({value: id, type: 'topic'})}>
                                                {name}
                                            </span>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            <div id="projects" className={styles.projects}>
                <Fade left opposite cascade when={showRepos} duration={500}>
                    <div className={styles.inline}>
                        <h2>
                            {
                                filter ?
                                    <span>{filter.type === 'language' ? filter.value : topics[filter.value]} projects</span>
                                    :
                                    <span>Pinned Projects</span>
                            }
                        </h2>
                        <div>
                            {
                                filter ?
                                    <span role="button" tabIndex={-1} className={styles.clearfilter} onClick={() => handleFilterClick(null)} onKeyDown={() => handleFilterClick(null)}><SiteIcons.MdCancel size={24} style={{ verticalAlign: 'middle' }} /> Clear filter</span>
                                    :
                                    <a href={`https://github.com/${user.login}?tab=repositories`}>See All &rarr;</a>
                            }
                        </div>
                    </div>
                    <div className={styles.grid}>
                        {
                            !repos.length ?
                            <strong>Sorry, nothing to show.</strong>
                            :
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
                    </div>
                </Fade>
            </div>
        </section>
    )

}

export default Projects;