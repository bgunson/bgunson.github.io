import * as React from 'react'
import { SiteIcons } from '../shared/site-icons'

const Blog = ({ props }) => {
    if (props.config.enable) {

        return (
            <section>
                <h2 style={{ textAlign: 'center' }}>Recent Blog Posts</h2>
                <div style={{ padding: '0 4%' }}>
                    {
                        props.posts.slice(0, 3).map(post => {
                            return (
                                <a key={post.id} href={post.link}>
                                    <h3>{post.title}</h3>
                                    <p><SiteIcons.MdOutlineDateRange /> {post.pubDate ? post.pubDate : ''}</p>
                                    <p>{post.summary.length > 500 ? post.summary.slice(0, 500) + '...' : post.summary}</p>
                                </a>
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