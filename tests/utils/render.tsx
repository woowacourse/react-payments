import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';

export const TestProvider = ({ children }: { children: ReactNode }) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};
