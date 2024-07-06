import React from 'react';
import { motion } from 'framer-motion';
import styles from './PhoneForm.module.scss';

const leftAnimationVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

const rightAnimationVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
};

const PhoneForm = () => {

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.left}
                initial="hidden"
                whileInView= "visible"
                variants={leftAnimationVariants}
                transition={{ duration: 1, delay: 0.5}}
            >
                <h2>Зацікавила пропозиція?</h2>
                <p>
                    Залиште свій номер телефону, і наш менеджер зв'яжеться з вами найближчим часом для обговорення всіх деталей. Ви також можете відвідати наші сторінки в соціальних мережах та зв’язатись з нами.
                </p>
            </motion.div>
            <motion.div
                className={styles.right}
                initial="hidden"
                whileInView="visible"
                variants={rightAnimationVariants}
                transition={{ duration: 1, delay: 0.5}}
            >
                <div className={styles.inputWrapper}>
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
                </div>
                <div className={styles.socialIcons}>
                    <a href="#facebook"><motion.div className={styles.icon} whileHover={{ scale: 1.1 }} /></a>
                    <a href="#twitter"><motion.div className={styles.icon} whileHover={{ scale: 1.1 }} /></a>
                    <a href="#instagram"><motion.div className={styles.icon} whileHover={{ scale: 1.1 }} /></a>
                </div>
            </motion.div>
        </div>
    );
};

export default PhoneForm;
