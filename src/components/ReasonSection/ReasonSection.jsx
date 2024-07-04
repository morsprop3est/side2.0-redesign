// src/components/Section.jsx
import React from 'react';
import styles from './ReasonSection.module.scss';

import logoImage from '../../assets/images/logo.png';

const Section = () => {
    return (
        <div className={`${styles.container} ${styles.sectionContainer}`}>
            <h2 id = "section1" className={styles.title}>Для чого вам потрібен сайт</h2>
            <div className={styles.blockContainer}>
                <div className={styles.block}>
                    <img src={logoImage} alt="Тестова картинка" className={styles.image} />
                    <p className={styles.textLarge}>Тестовий текст</p>
                    <p className={styles.textSmall}>Ще трохи тестового тексту</p>
                </div>
                <div className={styles.block}>
                    <img src={logoImage} alt="Тестова картинка" className={styles.image} />
                    <p className={styles.textLarge}>Тестовий текст</p>
                    <p className={styles.textSmall}>Ще трохи тестового тексту</p>
                </div>
                <div className={styles.block}>
                    <img src={logoImage} alt="Тестова картинка" className={styles.image} />
                    <p className={styles.textLarge}>Тестовий текст</p>
                    <p className={styles.textSmall}>Ще трохи тестового тексту</p>
                </div>
            </div>
        </div>
    );
};

export default Section;
