import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CardNameInput from './CardNameInput';
import CardRegisterProvider from '../../../../context/CardRegisterContext';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../styles/theme';

export default {
  title: 'Components/CardNameInput',
  component: CardNameInput,
  tags: ['autodocs'],
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

const handleBlurAction = action('onBlur');

const Template: Story = () => <CardNameInput onBlur={handleBlurAction} isValid={true} />;

export const Default = Template.bind({});
