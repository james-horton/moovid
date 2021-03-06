import React from 'react';

import styles from './Header.module.css';
import avatar from '../images/moo.png';
import logo from '../images/moovid-logo.png'

const Header = () => {
    return (
        <div className={styles.header}>                 
            <img className={`${styles.headerlogo} center-image`} src={avatar} alt="avatar" />
            <img className={`${styles.titlelogo} center-image`} src={logo} alt="logo" />
        </div>
    );
}

export default Header;