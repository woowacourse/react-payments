import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

export function renderWithRouter(
  ui: ReactElement,
  { route = '/', ...options }: RenderOptions & { route?: string } = {},
) {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>, options);
}

export * from '@testing-library/react';
