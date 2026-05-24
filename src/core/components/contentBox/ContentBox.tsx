import styles from './ContentBox.module.css';

import type { ContentBoxProps } from '.';

export const ContentBox = ({ children }: ContentBoxProps) => {
  return <div className={styles.contentBox}>{children}</div>;
};
