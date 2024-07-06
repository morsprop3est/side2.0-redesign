import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './StepsSlider.module.scss';
import { stepsData } from '../../data/stepsData';

const slideVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 200 : -200,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction < 0 ? 200 : -200,
        opacity: 0,
    }),
};

const SlideContent = ({ currentStep, direction }) => {
    return (
        <AnimatePresence initial={false} custom={direction}>
            <motion.img
                key={stepsData[currentStep].image}
                src={stepsData[currentStep].image}
                alt={stepsData[currentStep].title}
                custom={direction}
                variants={slideVariants}
                initial={direction > 0 ? "enter" : "enter"}
                animate="center"
                exit={direction > 0 ? "exit" : "exit"}
                transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                }}
                className={styles.image}
            />
        </AnimatePresence>
    );
};

export default SlideContent;
