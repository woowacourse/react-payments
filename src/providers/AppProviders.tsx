import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const AppProviders = ({ children }: Props) => {
  return children;
};
