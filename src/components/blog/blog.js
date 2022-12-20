import * as React from 'react'
import { SiteIcons } from '../shared/site-icons'
import * as styles from '../../styles/Home.module.css'
import { Fade } from 'react-reveal'

const Blog = ({ props }) => {
    if (props.config.enable) {

        return (
            <section id="blog" className={styles.blog}>
                <h2>Recent Blog Posts</h2>
                <div className={styles.grid}>
                    {
                        props.posts.slice(0, 3).map(post => {
                            return (
                                <Fade key={post.id} bottom duration={1000}>
                                    <a href={post.link} className={styles.blogcard}>
                                        <h3>{post.title}</h3>
                                        <p><SiteIcons.MdOutlineDateRange /> {post.pubDate ? post.pubDate : ''}</p>
                                        <p>{post.summary.length > 200 ? post.summary.slice(0, 200) + '...' : post.summary}</p>
                                    </a>
                                </Fade>
                            )
                        })
                    }
                </div>
            </section>
        )
    } else {
        return null
    }

}
export default Blog;