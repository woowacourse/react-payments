import { Story } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Label } from './Label';
import Theme from '../../../styles/theme';

export default {
  component: Label,
  title: 'Label',
  decorators: [
    (Story: Story) => {
      return (
        <ThemeProvider theme={Theme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export const Default: React.FC = () => (
  <Label htmlFor={'default'}>
    <p>This is Label</p>
  </Label>
);
