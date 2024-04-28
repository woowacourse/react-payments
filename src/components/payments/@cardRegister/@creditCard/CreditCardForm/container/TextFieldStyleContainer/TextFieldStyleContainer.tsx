import styles from './TextFieldStyleContainer.module.css';

const TextFieldStyleContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.textFieldContainer}>{children}</div>;
};

export default TextFieldStyleContainer;
