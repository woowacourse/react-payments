import React from 'react';
import type { Preview } from '@storybook/react';
import { MemoryRouter, Route, Routes } from 'react-router';

const withMemoryRouter = (Story, context) => {
  const initialEntries = context.parameters.initialEntries || ['/'];
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path="*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};

const preview: Preview = {
  decorators: [withMemoryRouter],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
