import styles from './Icon.module.css';

import { icons } from './icons';

import type { IconProps } from '.';

export const Icon = ({ icon }: IconProps) => {
  const iconImg = icons[icon as keyof typeof icons];
  return <span className={styles.icon}>{iconImg}</span>;
};
