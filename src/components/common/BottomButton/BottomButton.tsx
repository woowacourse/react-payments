import styles from './BottomButton.module.css';

type BottomButton = {
  name: string;
  type?: 'confirm';
};

// TODO: 컬러는 css로 분리
const BottomButton = ({ name, type = 'confirm' }: BottomButton) => {
  return <button className={`${styles['bottom-button']} ${styles[type]}`}>{name}</button>;
};

export default BottomButton;
