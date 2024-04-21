import type { Meta, StoryObj } from '@storybook/react';

import { CardNumbersInput } from '../components';

const meta = {
  title: 'Input',
  component: CardNumbersInput,
} satisfies Meta<typeof CardNumbersInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumbersInputDefault: Story = {
  args: {
    editCardMark: () => {},
    editCardNumbers: () => {},
  },
};
