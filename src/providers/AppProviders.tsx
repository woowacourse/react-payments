import type { ReactNode } from 'react';

import { BrowserRouter as Router } from 'react-router';

import { ENV } from '@/configs/env';

type Props = {
  children: ReactNode;
};

export const AppProviders = ({ children }: Props) => {
  return <Router basename={ENV.BASE_URL}>{children}</Router>;
};
