import React from 'react';
import { Meta, Story } from '@storybook/react';
import CardNameInput from './CardNameInput';
import CardRegisterProvider from '../../../../context/CardRegisterContext';
import { ThemeProvider } from 'styled-components';
import theme from '../../../../styles/theme';

export default {
  title: 'Components/CardNameInput',
  component: CardNameInput,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CardRegisterProvider>
          <Story />
        </CardRegisterProvider>
      </ThemeProvider>
    ),
  ],
} as Meta;

const Template: Story = () => <CardNameInput />;

export const Default = Template.bind({});
