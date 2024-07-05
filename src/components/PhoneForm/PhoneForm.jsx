import React from 'react';
import { motion } from 'framer-motion';
import styles from './PhoneForm.module.scss';

const PhoneForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.phoneForm}>
                <div className={styles.left}>
                    <h2>Зацікавила пропозиція?</h2>
                    <p>
                        Залиште свій номер телефону, і наш менеджер зв'яжеться з вами найближчим часом для обговорення всіх деталей. Ви також можете відвідати наші сторінки в соціальних мережах та зв’язатись з нами.
                    </p>
                </div>
                <div className={styles.right}>
                    <motion.input
                        type="text"
                        placeholder="Введіть номер телефону"
                        className={styles.phoneInput}
                        whileFocus={{ scale: 1.05 }}
                    />
                    <motion.button
                        className={styles.submitButton}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Відправити
                    </motion.button>
                    <div className={styles.socialIcons}>
                        <a href="#facebook"><motion.div className={styles.icon} whileHover={{ scale: 1.1 }}/></a>
                        <a href="#twitter"><motion.div className={styles.icon} whileHover={{ scale: 1.1 }}/></a>
                        <a href="#instagram"><motion.div className={styles.icon} whileHover={{ scale: 1.1 }}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneForm;
