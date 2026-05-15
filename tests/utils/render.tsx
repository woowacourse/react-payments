import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';

interface TestProviderProps {
  children: ReactNode;
  route?: string;
}

export const TestProvider = ({ children, route = '/' }: TestProviderProps) => {
  return <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>;
};
