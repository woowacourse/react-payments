import { MouseEventHandler } from 'react';
import style from './confirmButton.module.css';

type ConfirmButtonProps = {
  type: 'button' | 'submit' | 'reset';
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const ConfirmButton = ({
  type,
  text,
  onClick,
  className,
}: ConfirmButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${style.basic} ${className}`}
    >
      {text}
    </button>
  );
};

export default ConfirmButton;
