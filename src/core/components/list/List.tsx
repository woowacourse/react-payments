import styles from './List.module.css';

import { Item } from './Item';
import { ItemSkeleton } from './ItemSkeleton';

import type { ListProps } from '.';

export const List = ({ children }: ListProps) => {
  return <div className={styles.list}>{children}</div>;
};

List.Item = Item;
List.ItemSkeleton = ItemSkeleton;
