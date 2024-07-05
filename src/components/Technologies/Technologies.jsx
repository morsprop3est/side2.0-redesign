import React from "react";
import { motion } from "framer-motion";
import styles from "./Technologies.module.scss";

import icon1 from "../../assets/images/technologies-icons/motion.jpg";
import icon2 from "../../assets/images/technologies-icons/axios.jpg";
import icon3 from "../../assets/images/technologies-icons/css.jpg";
import icon4 from "../../assets/images/technologies-icons/form.jpg";
import icon5 from "../../assets/images/technologies-icons/html.jpg";
import icon6 from "../../assets/images/technologies-icons/js.jpg";
import icon7 from "../../assets/images/technologies-icons/material.jpg";
import icon8 from "../../assets/images/technologies-icons/query.jpg";
import icon9 from "../../assets/images/technologies-icons/react.jpg";
import icon10 from "../../assets/images/technologies-icons/redux.jpg";
import icon11 from "../../assets/images/technologies-icons/router.jpg";
import icon12 from "../../assets/images/technologies-icons/scss.jpg";
import icon13 from "../../assets/images/technologies-icons/spring.jpg";
import icon14 from "../../assets/images/technologies-icons/webpack.jpg";
import icon15 from "../../assets/images/technologies-icons/js.jpg"; //
import icon16 from "../../assets/images/technologies-icons/html.jpg"; //
import icon17 from "../../assets/images/technologies-icons/css.jpg"; //
import icon18 from "../../assets/images/technologies-icons/form.jpg"; //

const icons = [
    { src: icon1, x: "-200%", y: "-400%" },
    { src: icon2, x: "-550%", y: "-350%" },
    { src: icon3, x: "-400%", y: "-300%" },
    { src: icon4, x: "-600%", y: "-200%" },
    { src: icon5, x: "-430%", y: "-100%" },
    { src: icon6, x: "-600%", y: "0%" },
    { src: icon7, x: "-400%", y: "100%" },
    { src: icon8, x: "-550%", y: "200%" },
    { src: icon9, x: "-350%", y: "300%" },
    { src: icon10, x: "-150%", y: "300%" },
    { src: icon11, x: "200%", y: "-400%" },
    { src: icon12, x: "400%", y: "-350%" },
    { src: icon13, x: "500%", y: "-200%" },
    { src: icon14, x: "250%", y: "-250%" },
    { src: icon15, x: "350%", y: "-100%" },
    { src: icon16, x: "500%", y: "0%" },
    { src: icon17, x: "400%", y: "130%" },
    { src: icon18, x: "250%", y: "250%" },
];

const textAnimation = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: custom,
        }
    }),
};


const Technologies = () => {
    return (
        <div className={styles.container} id = "section3">
            <motion.div className={styles.textContainer}>
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    custom = {1}
                    variants={textAnimation}
                    viewport={{once: true}}
                >
                    Найсучасніші технології розробки
                </motion.h1>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    custom = {1.3}
                    variants={textAnimation}
                    viewport={{once: true}}
                    transition={{ delay: 0.2 }}
                >
                    Ми використовуємо найсучасніші та найбільш популярні технології для розробки вебсайтів, щоб забезпечити високу продуктивність, надійність та зручність користування. Приклади використання наведені нижче.
                </motion.p>
            </motion.div>
            {icons.map((icon, index) => (
                <motion.img
                    key={index}
                    src={icon.src}
                    className={styles.icon}
                    initial={{ x: "0%", y: "0%", opacity: 0 }}
                    whileInView={{ x: icon.x, y: icon.y, opacity: 1 }}
                    viewport={{once: true}}
                    transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                />
            ))}
        </div>
    );
};

export default Technologies;
