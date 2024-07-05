import React from 'react';
import styles from './AdvantageSection.module.scss';
import logoImage from '../../assets/images/logo.png';


const AdvantageSection = () => {
    return (
        <div className={`${styles.container} ${styles.sectionContainer}`} id = 'section4'>
            <div className={styles.blockContainer}>
                {/* First block */}
                <div className={styles.block}>
                    <img src={logoImage} alt="Тестова картинка" className={styles.image} />
                    <p className={styles.textLarge}>Тестовий текст</p>
                    <p className={styles.textSmall}>Ще трохи тестового тексту</p>
                </div>

                {/* Second block */}
                <div className={styles.block}>
                    <img src={logoImage} alt="Тестова картинка" className={styles.image} />
                    <p className={styles.textLarge}>Тестовий текст</p>
                    <p className={styles.textSmall}>Ще трохи тестового тексту</p>
                </div>

                {/* Third block */}
                <div className={styles.block}>
                    <img src={logoImage} alt="Тестова картинка" className={styles.image} />
                    <p className={styles.textLarge}>Тестовий текст</p>
                    <p className={styles.textSmall}>Ще трохи тестового тексту</p>
                </div>

                {/* Fourth block */}
                <div className={styles.block}>
                    <img src={logoImage} alt="Тестова картинка" className={styles.image} />
                    <p className={styles.textLarge}>Тестовий текст</p>
                    <p className={styles.textSmall}>Ще трохи тестового тексту</p>
                </div>
            </div>
        </div>
    );
};

export default AdvantageSection;