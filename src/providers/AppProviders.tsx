import type { ReactNode } from 'react';

import { BrowserRouter as Router } from 'react-router';

type Props = {
  children: ReactNode;
};

export const AppProviders = ({ children }: Props) => {
  return <Router>{children}</Router>;
};
