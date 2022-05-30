import styles from './index.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type ButtonProps = {
  className: string;
  theme: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string | React.ReactNode;
};

const Button = ({ className, theme, handleClick, children }: ButtonProps) => {
  return (
    <button className={`${cx('container')} ${className} font-${theme}`} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  theme: '',
  handleClick: undefined,
};

export default Button;
