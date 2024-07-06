import React from 'react';
import styles from './Footer.module.scss';
import logoImage from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerSection}>
                        <img src={logoImage} alt="Logo"/>
                        <p>Тут ваш текст</p>
                    </div>
                    <div className={styles.footerSection}>
                        <h4>Заголовок</h4>
                        <ul>
                            <li><a href="#">Пункт 1</a></li>

                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h4>Загальна інформація</h4>
                        <ul>
                            <li><a href="#section1">Для чого сайт</a></li>
                            <li><a href="#section2">Як замовити</a></li>
                            <li><a href="#section3">Технології</a></li>
                            <li><a href="#section4">Портфоліо</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.copyright}>
                    Copyright SiDE & Yena © 2024. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
