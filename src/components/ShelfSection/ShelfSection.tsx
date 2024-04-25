import styles from './ShelfSection.module.css';

const ShelfSection = ({ children }) => {
  return <div className={styles.shelf__section}>{children}</div>;
};

export default ShelfSection;
