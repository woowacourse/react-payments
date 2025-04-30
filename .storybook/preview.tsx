import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/styles/theme.ts';
import React, { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { NumbersProvider } from '../src/contexts/NumbersContext.tsx';
import { BrandProvider } from '../src/contexts/BrandContext.tsx';
import { ExpiryDateProvider } from '../src/contexts/ExpiryDateContext.tsx';
import { CvcProvider } from '../src/contexts/CvcContext.tsx';
import { PasswordProvider } from '../src/contexts/PasswordContext.tsx';

const AllProviders: React.FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MemoryRouter initialEntries={['/']}>
      <NumbersProvider>
        <BrandProvider>
          <ExpiryDateProvider>
            <CvcProvider>
              <PasswordProvider>{children}</PasswordProvider>
            </CvcProvider>
          </ExpiryDateProvider>
        </BrandProvider>
      </NumbersProvider>
    </MemoryRouter>
  </ThemeProvider>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <AllProviders>
          <Story {...context} />
        </AllProviders>
      );
    },
  ],
};

export default preview;
