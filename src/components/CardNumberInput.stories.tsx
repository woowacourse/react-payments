import { StoryFn } from '@storybook/react';
import CardNumberInput from './CardNumberInput';

export default {
  title: 'CardNumberInput',
  component: CardNumberInput,
};

const Template: StoryFn<{}> = (args: {}) => <CardNumberInput {...args} />;

export const CardNumbersInput = Template.bind({});
CardNumbersInput.args = {
  type: 'text',
  maxLength: 4,
};
