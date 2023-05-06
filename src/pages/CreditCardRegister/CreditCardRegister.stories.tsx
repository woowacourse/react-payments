/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */

import { Story as StoryType, Meta } from '@storybook/react';
import StoryProvider from 'stories/StoryProvider';
import CreditCardRegister from './CreditCardRegister';

export default {
  title: 'CreditCardRegister Page',
  component: CreditCardRegister,
  decorators: [
    (Story) => (
      <StoryProvider>
        <Story />
      </StoryProvider>
    ),
  ],
} satisfies Meta<typeof CreditCardRegister>;

const Template: StoryType = (args) => (
  <CreditCardRegister {...args} />
);

export const Default = Template.bind({});
Default.args = {

};
