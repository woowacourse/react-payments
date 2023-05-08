import { Story } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { CardRegisterForm } from './CardRegisterForm';
import Theme from '../../styles/theme';

export default {
  component: CardRegisterForm,
  title: 'CardRegisterForm',
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

const Template: Story = (args) => <CardRegisterForm {...args} />;
/*
export const Default = Template.bind({});
Default.args = {};

Error
useNavigate() may be used only in the context of a <Router> component.
*/
