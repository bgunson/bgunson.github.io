import React from 'react'
import { Fade } from 'react-reveal'
import * as styles from '../../styles/Home.module.css'

const Interests = ({ interests }) => {

    return (
        <div style={{ margin: '2% 0' }}>
            <Fade top delay={250}>
                <h2>My Interests</h2>
            </Fade>
            <div className={styles.interests}>
                <Fade top delay={500}>
                    {
                        interests.map(interest => {
                            if (interest.blurb) {
                                return (
                                    <div key={interest.name} className='tooltip'>
                                        <span className='tooltiptext tooltiptop'>{interest.blurb}</span>
                                        <span className={styles.interestitem}>{interest.name}</span>
                                    </div>
                                )
                            } else {
                                return <span key={interest.name} className={styles.interestitem} style={{ lineHeight: 'normal' }}>{interest.name}</span>

                            }
                        })
                    }
                </Fade>
            </div>
        </div>
    )
}

export default Interests