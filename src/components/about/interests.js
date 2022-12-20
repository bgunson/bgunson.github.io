import React from 'react'
import * as styles from '../../styles/Home.module.css'

const Interests = ({ interests }) => {

    return (
        <section style={{ margin: '2% 0' }}>
            <h2>My Interests</h2>
            <div className={styles.interests}>
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
            </div>
        </section>
    )
}

export default Interests