import clsx from "clsx";
import styles from "./ProgressBar.module.css";
import type { FlowStep } from "@/AddCard/types/hook";
import { STEP_ORDER_INDEX } from "@/AddCard/constants";

interface ProgressBarProps {
  currentStep: FlowStep;
  allValid: boolean;
  stepLabels: string[];
}

const ProgressBar = ({
  currentStep,
  allValid,
  stepLabels,
}: ProgressBarProps) => {
  const currentStepNumber = STEP_ORDER_INDEX[currentStep] || 1;
  const showError = currentStep === "COMPLETE" && allValid === false;

  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.stepsIndicator}>
        {stepLabels.map((label, index) => {
          const stepNumber = index + 1;

          return (
            <div
              key={stepNumber}
              className={clsx(
                styles.step,
                stepNumber <= currentStepNumber && styles.active,
                showError && styles.error
              )}
              aria-label={`Step ${stepNumber}: ${label}`}
            >
              <div className={styles.stepCircle}>{stepNumber}</div>
              <div className={styles.stepBar}>
                <div
                  className={clsx(
                    styles.stepBarFill,
                    stepNumber <= currentStepNumber && styles.active,
                    showError && styles.error
                  )}
                  style={{
                    width: stepNumber <= currentStepNumber ? "100%" : "0%",
                  }}
                />
              </div>
              {!showError && <div className={styles.stepLabel}>{label}</div>}
            </div>
          );
        })}
      </div>

      {showError && (
        <span className={styles.errorMessage}>
          입력값이 유효하지 않으니 다시 입력해주세요!
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
