import React from 'react';

import styles from './SubmitButton.module.css';

interface SubmitButtonProps {
  label: string;
  onClickSubmitButton: React.MouseEventHandler<HTMLButtonElement>;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, onClickSubmitButton }) => {
  return (
    <button className={styles.submitButton} type="submit" onClick={onClickSubmitButton}>
      {label}
    </button>
  );
};

export default SubmitButton;
