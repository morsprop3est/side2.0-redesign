import React, { useState } from 'react';
import styles from './StepsSlider.module.scss';
import SlideContent from './SlideContent';
import TextContent from './TextContent';
import { stepsData } from '../../data/stepsData';
import SliderButtons from './SliderButtons'; // Import the NavigationButtons component

const StepsSlider = () => {
    const [[currentStep, direction], setCurrentStep] = useState([0, 0]);

    const nextStep = () => {
        setCurrentStep(([currentStep]) => [
            currentStep === stepsData.length - 1 ? 0 : currentStep + 1,
            1,
        ]);
    };

    const prevStep = () => {
        setCurrentStep(([currentStep]) => [
            currentStep === 0 ? stepsData.length - 1 : currentStep - 1,
            -1,
        ]);
    };

    return (
        <div className={styles.sliderBackground} id="section2">
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <SlideContent currentStep={currentStep} direction={direction} />
                </div>
                <div className={styles.rightContent}>
                    <TextContent currentStep={currentStep} />
                    {/* Replace the navigation buttons JSX with the imported NavigationButtons component */}
                    <SliderButtons
                        prevStep={prevStep}
                        nextStep={nextStep}
                        currentStep={currentStep}
                    />
                </div>
            </div>
        </div>
    );
};

export default StepsSlider;
