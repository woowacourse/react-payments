import { Story } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Spinner } from './Spinner';
import Theme from '../../../styles/theme';

export default {
  component: Spinner,
  title: 'Spinner',
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

const Template: Story = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {};
