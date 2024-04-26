import { ButtonHTMLAttributes } from 'react';
import styles from './BottomButton.module.css';
import { ButtonType } from '../../../types/buttonType';

interface BottomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  buttonType?: ButtonType;
}

// TODO: 컬러는 css로 분리
const BottomButton = (props: BottomButton) => {
  const { name, buttonType = 'confirm', ...rest } = props;

  return (
    <button {...rest} className={`${styles['bottom-button']} ${styles[buttonType]}`}>
      {name}
    </button>
  );
};

export default BottomButton;
