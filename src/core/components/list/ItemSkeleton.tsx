import cn from 'classnames';

import styles from './List.module.css';

import type { ItemSkeletonProps } from '.';

export const ItemSkeleton = ({ left, right, title, content, description }: ItemSkeletonProps) => {
  return (
    <div className={cn(styles.item, styles.skeleton)}>
      {left && <div className={styles.left}>{left}</div>}
      <div className={styles.box}>
        {title && <div className={styles.title}></div>}
        {content && <div className={styles.content}></div>}
        {description && <div className={styles.description}></div>}
      </div>
      {right && <div className={styles.right}>{right}</div>}
    </div>
  );
};
