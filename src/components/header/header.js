import * as React from 'react';
import * as styles from "../../styles/Home.module.css"


const Header = ({ user }) => {

    return (
        <header>
            <h1 className={styles.title}>
                Hi, I'm {user.name.split(' ')[0]}
            </h1>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <span className={styles.description}>
                    {user.bio.split(',').join('\n')}
                </span>
            </div>
        </header>
    )

}

export default Header;