import React, { CSSProperties, useMemo } from 'react';

import styles from './style.module.css';

interface ProgressBarProps {
  numberOfTotalStep: number;
  currentStep: number;
}
function ProgressBar(props: ProgressBarProps) {
  const { numberOfTotalStep, currentStep } = props;

  const barStyle: CSSProperties = useMemo(
    () => ({
      width: `${(currentStep / numberOfTotalStep) * 100}%`,
    }),
    [currentStep],
  );

  return (
    <div className={styles.background}>
      <div className={styles.bar} style={barStyle} />
    </div>
  );
}

export default ProgressBar;
