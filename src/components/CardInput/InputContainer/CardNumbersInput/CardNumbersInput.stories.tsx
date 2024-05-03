import { Meta, StoryObj } from '@storybook/react';

import CardNumbersInput from './index';

const meta: Meta<typeof CardNumbersInput> = {
  title: 'CardInput Container',
  component: CardNumbersInput,
  args: {
    numbers: ['', '', '', ''],
    numberErrors: [false, false, false, false],
    onNumberChange: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof CardNumbersInput>;

export const CardNumbers: Story = {};
