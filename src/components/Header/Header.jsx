import React from 'react';

import styles from './Header.module.scss';
import {motion} from "framer-motion";


function Header() {
    const headerAnimation = {
        hidden: {
            y: -10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 1,
                ease: "easeInOut"
            },
        },
    }

    return (
        <motion.header
            initial="hidden"
            whileInView="visible"
            variants={headerAnimation}
        >
            <div className="container">
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>Для чого сайт?</li>
                    <li className={styles.menuItem}>Як замовити</li>
                    <li className={styles.menuItem}>Технології розробки</li>
                    <li className={styles.menuItem}>Чому саме ми</li>
                    <li className={styles.menuItem}>Наші роботи</li>
                    <li className={styles.menuItem}>Зв'язатись з нами</li>
                </ul>
            </div>
        </motion.header>
    )
}

export default Header
