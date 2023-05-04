import type { Meta, StoryObj } from '@storybook/react';

import '../../public/storybook.css';
import InputCardData from '../components/InputCardData';

const meta: Meta<typeof InputCardData> = {
  title: 'InputCardData',
  tags: ['autodocs'],
  component: InputCardData,
};

export default meta;
type Story = StoryObj<typeof InputCardData>;

export const CardNumberInput: Story = {
  args: {
    value: '1234',
    required: true,
    inputType: 'number',
    className: 'card-number',
    minDataLength: 4,
    maxDataLength: 4,
    name: 'first',
    dataId: 0,
  },
};
export const CardNumberPassword: Story = {
  args: {
    required: true,
    inputType: 'password',
    passwordType: 'card-number',
    className: 'card-number',
    value: '1234',
  },
};
