import React from "react";
import styles from "./wizard.module.scss";

function Wizard({ allSteps, currentStep }) {
  return (
    <div className={`${styles["container"]} flex items-center`}>
      {allSteps.map((step, index) => {
        const isLastValue = index === allSteps.length - 1;
        let itemClass = styles["wizard-item"];
        if (step === currentStep) itemClass += ` ${styles["active"]}`;
        return (
          <>
            <div key={step} className={`${itemClass}`}>
              <span className={`${styles["wizard-step"]} `}>{step}</span>
            </div>
            {!isLastValue && (
              <div className={`${styles["wizard-item-bar"]} `}></div>
            )}
          </>
        );
      })}
    </div>
  );
}

export { Wizard };
