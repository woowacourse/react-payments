import styles from './List.module.css';

import type { ItemProps } from '.';

export const Item = ({ left, right, title, content, description }: ItemProps) => {
  return (
    <div className={styles.item}>
      {left && <div className={styles.left}>{left}</div>}
      <div className={styles.box}>
        {title && <div className={styles.title}>{title}</div>}
        {content && <div className={styles.content}>{content}</div>}
        {description && <div className={styles.description}>{description}</div>}
      </div>
      {right && <div className={styles.right}>{right}</div>}
    </div>
  );
};
