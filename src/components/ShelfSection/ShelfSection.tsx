import { ReactNode } from 'react';
import styles from './ShelfSection.module.css';

const ShelfSection = ({ children }: { children: ReactNode }) => {
  return <div className={styles.shelf__section}>{children}</div>;
};

export default ShelfSection;
