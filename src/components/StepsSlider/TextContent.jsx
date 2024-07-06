import React from 'react';
import { motion } from 'framer-motion';
import styles from './StepsSlider.module.scss';
import { stepsData } from '../../data/stepsData';

const textVariants = {
    enter: {
        opacity: 0,
        y: 10,
    },
    center: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: -10,
    },
};

const TextContent = ({ currentStep }) => {
    return (
        <>
            <motion.h2
                key={stepsData[currentStep].title + "-title"}
                className={styles.stepTitle}
                variants={textVariants}
                initial="exit"
                animate="center"
                exit="enter"
                transition={{
                    opacity: { duration: 0.2 },
                }}
            >{`Крок ${currentStep + 1}`}</motion.h2>
            <motion.h1
                key={stepsData[currentStep].title + "-subtitle"}
                className={styles.stepSubtitle}
                variants={textVariants}
                initial="exit"
                animate="center"
                exit="enter"
                transition={{
                    opacity: { duration: 0.2 },
                }}
            >{stepsData[currentStep].title}</motion.h1>
            <motion.p
                key={stepsData[currentStep].text}
                className={styles.stepText}
                variants={textVariants}
                initial="exit"
                animate="center"
                exit="enter"
                transition={{
                    opacity: { duration: 0.2 },
                }}
            >{stepsData[currentStep].text}</motion.p>
        </>
    );
};

export default TextContent;
