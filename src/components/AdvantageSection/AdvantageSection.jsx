// src/components/AdvantageSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './AdvantageSection.module.scss';
import { advantageData } from '../../data/advantageData';

const animationVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: i * 0.3
        }
    })
};

const AdvantageSection = () => {
    return (
        <div className={`${styles.container} ${styles.sectionContainer}`} id="section4">
            <div className={styles.blockContainer}>
                {advantageData.map((block, index) => (
                    <motion.div
                        className={styles.block}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={animationVariants}
                        custom={1 + index}
                        key={block.id}
                    >
                        <img src={block.image} alt={block.title} className={styles.image} />
                        <p className={styles.textLarge}>{block.title}</p>
                        <p className={styles.textSmall}>{block.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AdvantageSection;
