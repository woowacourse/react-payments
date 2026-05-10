import type { ReactNode } from 'react';

import { Content } from './Content';
import { Action } from './Action';

import styles from './FullScreen.module.css';

interface FullScreenProps {
  children?: ReactNode;
}

export const FullScreen = ({ children }: FullScreenProps) => {
  return <div className={styles.fullScreen}>{children}</div>;
};

FullScreen.Content = Content;
FullScreen.Action = Action;
