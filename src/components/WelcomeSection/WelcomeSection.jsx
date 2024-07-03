import React from 'react';
import {motion} from "framer-motion";

import styles from './WelcomeSection.module.scss';

import logoImage from '../../assets/images/logo.png';
import rightImage from '../../assets/svgs/user-welcome-section.svg';

const leftTextAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 1,
            ease: "easeInOut"
        },
    },
}

const rightTextAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 1,
            ease: "easeInOut"
        },
    },
}

const WelcomeSection = () => {
    return (
        <div className={styles.container}>
            <motion.section
                initial="hidden"
                whileInView="visible"
                variants={leftTextAnimation}
            >
                <div className={styles.left}>
                    <div className={styles.logoContainer}>
                        <img src={logoImage} alt="logo" className={styles.logo}/>
                    </div>
                    <h1 className={styles.title}>Ласкаво просимо до SiDE</h1>
                    <p className={styles.text}>Створюємо негри швидко Створюємо негри швидко Створюємо негри швидко.</p>
                    <button className={styles.button}>Хочу замовити</button>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                whileInView="visible"
                custom ={100}
                variants={rightTextAnimation}
            >
                <div className={styles.right}>
                    <img src={rightImage} alt="user-welcome-section" className={styles.rightImage}/>
                </div>
            </motion.section>
        </div>
);
}

export default WelcomeSection;
