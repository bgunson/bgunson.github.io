import * as React from 'react';
import { Fade } from 'react-reveal';
import * as styles from '../../styles/Home.module.css';
import { SiteIcons } from '../shared/site-icons';
import LangIcon from './lang-icon';

const Projects = ({ user }) => {

    const pinnedRepos = user.pinnedItems.nodes.map(item => user.repositories.nodes.find(r => r.id === item.id));

    const [selectedTopic, setSelectedTopic] = React.useState();
    const [repos, setRepos] = React.useState(pinnedRepos);
    const [showRepos, setShowRepos] = React.useState();

    const topics = {};
    user.repositories.nodes.forEach(repo => {
        repo.repositoryTopics.nodes.forEach(t => {
            topics[t.topic.id] = t.topic.name;
        });
    });

    const handleTopicClick = (id) => {
        let show = [];
        setShowRepos(false);
        if (!id || id === selectedTopic) {  // user cleared filter, or selected same so unset
            setSelectedTopic(null);
            show = pinnedRepos;
        } else {
            setSelectedTopic(id);
            show = user.repositories.nodes.filter(repo => repo.repositoryTopics.nodes.find(t => t.topic.id === id));
        }
        setRepos(show);
        setTimeout(() => setShowRepos(true), 500);
    }

    const activeTopicStyle = {
        'cursor': 'pointer',
        'backgroundColor': '#1a74dc',
        'color': 'white'
    };


    return (
        <section className={styles.projects}>
            <Fade top>
                <h2>Topics I've Explored</h2>
            </Fade>
            <Fade bottom cascade>
                <div className={styles.interests} style={{ margin: '0 10%', marginBottom: '8%' }}>
                    {
                        Object.entries(topics).map(([id, name]) => {
                            const activeStyle = selectedTopic === id ? activeTopicStyle : null;
                            return (

                                <span key={id} role="button" tabIndex={-1} className={styles.topic} style={activeStyle} onClick={() => handleTopicClick(id)} onKeyDown={() => this.handleTopicClick(id)}>
                                    {name}
                                </span>

                            )
                        })
                    }
                </div>
            </Fade>
            <Fade left>
                <div className={styles.inline}>
                    <h2>
                        {
                            selectedTopic ?
                                <span>{topics[selectedTopic]} projects</span>
                                :
                                <span>Projects</span>
                        }
                    </h2>
                    <div>
                        {
                            selectedTopic ?
                                <span role="button" tabIndex={-1} className={styles.clearfilter} onClick={() => handleTopicClick(null)} onKeyDown={() => this.handleTopicClick(null)}><SiteIcons.MdCancel size={24} style={{ verticalAlign: 'middle' }} /> Clear filter</span>
                                :
                                <a href={`https://github.com/${user.login}?tab=repositories`}>See All &rarr;</a>
                        }
                    </div>
                </div>
            </Fade>
            <Fade left opposite cascade when={showRepos} duration={500}>
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
                </div>
            </Fade>
        </section>
    )

}

export default Projects;