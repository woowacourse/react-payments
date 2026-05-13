import styles from './Title.module.css';

import type { TitleProps } from '.';

export const Title = ({ children }: TitleProps) => {
  return <div className={styles.title}>{children}</div>;
};
