import React from 'react';
import { motion } from 'framer-motion';
import styles from './WelcomeSection.module.scss';

import logoImage from '../../assets/images/logo.png';
import rightImage from '../../assets/svgs/user-welcome-section.svg';

const leftTextAnimation = {
    hidden: {
        x: -50,
        opacity: 0,
    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: custom,
            duration: 1,
            ease: "easeInOut"
        },
    }),
}

const rightTextAnimation = {
    hidden: {
        x: 50,
        opacity: 0,
    },
    visible: (custom) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: custom,
            duration: 1,
            ease: "easeInOut"
        },
    }),
}

const WelcomeSection = () => {
    return (
        <div className={styles.container}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                custom={0.5}
                variants={leftTextAnimation}
            >
                <div className={styles.left}>
                    <div className={styles.logoContainer}>
                        <motion.img
                            initial="hidden"
                            whileInView="visible"
                            custom={0.4}
                            variants={leftTextAnimation}
                            src={logoImage} alt="logo" className={styles.logo} />
                    </div>
                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        custom={0.5}
                        variants={leftTextAnimation}
                        className={styles.title}>Ласкаво просимо до SiDE</motion.h1>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        custom={0.6}
                        variants={leftTextAnimation}
                        className={styles.text}>Створюємо негри швидко Створюємо негри швидко Створюємо негри швидко.</motion.p>
                    <motion.button
                        initial="hidden"
                        whileInView="visible"
                        custom={0.7}
                        variants={leftTextAnimation}
                        className={styles.button}>Хочу замовити</motion.button>
                </div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                custom={0.5}
                variants={rightTextAnimation}
            >
                <div className={styles.right}>
                    <motion.img
                        initial="hidden"
                        whileInView="visible"
                        custom={1}
                        variants={rightTextAnimation}
                        src={rightImage} alt="user-welcome-section" className={styles.rightImage} />
                </div>
            </motion.div>
        </div>
    );
};

export default WelcomeSection;
