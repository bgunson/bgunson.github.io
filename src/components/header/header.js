import * as React from 'react';
import * as styles from "../../styles/Home.module.css"


const Header = ({ user }) => {

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                Hi, I'm <span style={{ color: 'orange' }}>{user.name.split(' ')[0]}</span>
            </h1>

            <div style={{ marginTop: '10px', textAlign: 'left' }}>
                <span className={styles.description}>
                    {user.bio.toUpperCase()}
                </span>
            </div>
        </header>
    )

}

export default Header;