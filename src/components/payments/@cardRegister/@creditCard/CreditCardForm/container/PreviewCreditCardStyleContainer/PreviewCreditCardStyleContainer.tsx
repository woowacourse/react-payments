import styles from './PreviewCreditCardStyleContainer.module.css';

const PreviewCreditCardStyleContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.creditCardFormContainer}>{children}</div>;
};

export default PreviewCreditCardStyleContainer;
