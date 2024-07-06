// src/components/Section.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ReasonSection.module.scss';
import { reasonData } from '../../data/reasonData';

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

const Section = () => {
    return (
        <div className={`${styles.container} ${styles.sectionContainer}`}>
            <motion.h2 id="section1"
                       className={styles.title}
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true }}
                       variants={animationVariants}
                       custom={0}
            >Для чого вам потрібен сайт</motion.h2>
            <div className={styles.blockContainer}>
                {reasonData.map((block, index) => (
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
                        <p className={styles.textLarge}>{block.textLarge}</p>
                        <p className={styles.textSmall}>{block.textSmall}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Section;
