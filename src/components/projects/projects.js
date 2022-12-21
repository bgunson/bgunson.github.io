import * as React from 'react';
import { Fade } from 'react-reveal';
import * as styles from '../../styles/Home.module.css';
import { SiteIcons } from '../shared/site-icons';
import LangIcon from './lang-icon';

const Projects = ({ user }) => {

    const [selectedTopic, setSelectedTopic] = React.useState();
    const [repos, setRepos] = React.useState(user.pinnedItems.nodes);

    // const repos = user.pinnedItems.nodes;

    const topics = {};
    user.repositories.nodes.forEach(repo => {
        repo.repositoryTopics.nodes.forEach(t => {
            topics[t.topic.id] = t.topic.name;
        });
    });

    const handleTopicClick = (id) => {
        if (!id || id === selectedTopic) {  // user cleared filter, or selected same so unset
            setSelectedTopic(null);
            setRepos(user.pinnedItems.nodes);
        } else {
            setRepos([]);
            setSelectedTopic(id);
            const topicRepos = user.repositories.nodes.filter(repo => repo.repositoryTopics.nodes.find(t => t.topic.id === id));
            setRepos(topicRepos);
        }
    }

    const activeTopicStyle = {
        'cursor': 'pointer',
        'backgroundColor': '#1a74dc',
        'color': 'white'
    };


    return (
        <section className={styles.projects}>
            <h2>Topics I've Explored</h2>
            <div className={styles.interests} style={{ margin: '0 10%', marginBottom: '5%' }}>
                {
                    Object.entries(topics).map(([id, name]) => {
                        const activeStyle = selectedTopic === id ? activeTopicStyle : null;
                        return (
                            <Fade key={id} slide bottom>
                                <span className={styles.topic} style={activeStyle} onClick={() => handleTopicClick(id)}>
                                    {name}
                                </span>
                            </Fade>
                        )
                    })
                }
            </div>
            <div className={styles.inline}>
                <h2>
                    {
                        selectedTopic ?
                        <span>{ topics[selectedTopic] } projects</span>
                        :
                        <span>Projects</span>
                    }
                </h2>
                <div>
                    {
                        selectedTopic ?
                            <span className={styles.clearfilter} onClick={() => handleTopicClick(null)}><SiteIcons.MdCancel size={24} style={{verticalAlign: 'middle'}}/> Clear filter</span>
                            :
                            <a href={`https://github.com/${user.login}?tab=repositories`}>See All &rarr;</a>
                    }
                </div>
            </div>
            <div className={styles.grid}>
                {
                    repos.map((repo) => {
                        if (!repo) return null;
                        const total = repo.languages.edges.map(l => l.size).reduce((val, acc) => val + acc)
                        return (
                            <Fade key={repo.id} left collapse duration={1000}
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