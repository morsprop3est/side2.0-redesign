import React, { useState } from 'react';
import styles from './StepsSlider.module.scss';
import { stepsData } from '../../data/stepsData';

const StepsSlider = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        setCurrentStep((prevStep) => (prevStep === stepsData.length - 1 ? 0 : prevStep + 1));
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => (prevStep === 0 ? stepsData.length - 1 : prevStep - 1));
    };

    return (
        <div className={styles.sliderBackground}>
            <div className={styles.sliderContainer}>
                <div className={styles.leftContent}>
                    <img src={stepsData[currentStep].image} alt={stepsData[currentStep].title} />
                </div>
                <div className={styles.rightContent}>
                    <h2 className={styles.stepTitle}>{`Крок ${currentStep + 1}`}</h2>
                    <h1 className={styles.stepSubtitle}>{stepsData[currentStep].title}</h1>
                    <p className={styles.stepText}>{stepsData[currentStep].text}</p>
                    <div className={styles.navigationButtons}>
                        <div className={styles.button}>
                            <button onClick={prevStep}>&lt;</button>
                        </div>
                        <div className={styles.button}>
                            <button onClick={nextStep}>&gt;</button>
                        </div>
                        <h2 className={styles.stepTitle}>{`${currentStep + 1} з 5`}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepsSlider;
