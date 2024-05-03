import { Meta, StoryObj } from '@storybook/react';

import Select from './index';

const meta = {
  title: 'Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    placeholder: '선택해 주세요.',
    isError: false,
    options: ['선택1', '선택2', '선택3'],
  },
};
