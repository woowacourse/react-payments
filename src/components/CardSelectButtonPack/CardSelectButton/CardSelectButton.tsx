import styles from './CardSelectButton.module.css';

type CardSelectButtonProps = {
  title: string;
  src: string;
};

const CardSelectButton = ({ title, src }: CardSelectButtonProps) => {
  return (
    <button className={styles.button}>
      <img className={styles.logo} src={src} alt={title} />
      <span className={styles.title}>{title}</span>
    </button>
  );
};

export default CardSelectButton;
