import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';

import { render } from '@testing-library/react';

interface TestProviderProps {
  children: ReactNode;
  route?: string;
}

export const TestProvider = ({ children, route = '/' }: TestProviderProps) => {
  return <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>;
};

export const renderProvider = ({ children, route }: TestProviderProps) => {
  return render(<TestProvider route={route}>{children}</TestProvider>);
};
