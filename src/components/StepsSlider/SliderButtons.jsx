import React from 'react';
import { motion } from 'framer-motion';
import styles from './StepsSlider.module.scss';

const SliderButtons = ({ prevStep, nextStep, currentStep }) => {
    return (
        <div className={styles.navigationButtons}>
            <motion.button
                className={styles.button}
                onClick={prevStep}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                &lt;
            </motion.button>
            <motion.button
                className={styles.button}
                onClick={nextStep}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                &gt;
            </motion.button>
            <h2 className={styles.stepTitle}>{`${currentStep + 1} з 5`}</h2>
        </div>
    );
};

export default SliderButtons;
