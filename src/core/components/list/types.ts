import type { ReactNode } from 'react';

export interface ListProps {
  children: ReactNode;
}

export interface ItemProps {
  left?: ReactNode;
  right?: ReactNode;
  title?: ReactNode;
  content?: ReactNode;
  description?: ReactNode;
}

export interface ItemSkeletonProps {
  left?: boolean;
  right?: boolean;
  title?: boolean;
  content?: boolean;
  description?: boolean;
}
