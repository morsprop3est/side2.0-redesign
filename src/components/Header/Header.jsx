import React from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.scss';

const Header = () => {
    const menuItems = [
        { label: "Для чого сайт?", anchor: "section1" },
        { label: "Як замовити", anchor: "section2" },
        { label: "Технології розробки", anchor: "section3" },
        { label: "Чому саме ми", anchor: "section4" },
        { label: "Наші роботи", anchor: "section5" },
        { label: "Зв'язатись з нами", anchor: "section6" },
    ];

    const headerAnimation = {
        hidden: {
            opacity: 0,
            y: -10,
        },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 1 + i * 0.2,
                duration: 0.5
            }
        })
    };

    return (
        <motion.header
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerAnimation}
        >
            <div className="container">
                <ul className={styles.menu}>
                    {menuItems.map((item, index) => (
                        <motion.li
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index}
                            variants={headerAnimation}
                            className={styles.menuItem}
                        >
                            <a href={`#${item.anchor}`} className={styles.menuLink}>
                                {item.label}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.header>
    )
}

export default Header;