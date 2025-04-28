import * as React from 'react';
import { MemoryRouter } from 'react-router';

export function withRouter(Story: any) {
  return (
    <MemoryRouter>
      <Story />
    </MemoryRouter>
  );
}
