import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';

export function renderWithRouter(children: ReactNode) {
  return render(<MemoryRouter>{children}</MemoryRouter>);
}
