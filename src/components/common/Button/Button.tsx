import styles from './Button.module.css';

type Props = {
  text: string;
  height: string;
};

export default function Button({ text, height }: Props) {
  return (
    <button className={styles.button} style={{ height }}>
      {text}
    </button>
  );
}
