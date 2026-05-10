import type { ReactNode } from 'react';

import styles from './FullScreen.module.css';

interface ActionProps {
  children?: ReactNode;
}

export const Action = ({ children }: ActionProps) => {
  return <div className={styles.action}>{children}</div>;
};
