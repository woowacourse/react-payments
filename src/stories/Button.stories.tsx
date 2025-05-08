import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/common/Button';
import { Text } from '@/components/common/Text';
const meta = {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '버튼 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: '60px',
    borderType: 'square',
    children: (
      <Text variant="Title" fontWeight="bold" color="white">
        버튼
      </Text>
    ),
  },
  argTypes: {
    height: {
      control: false,
    },
    borderType: {
      control: 'radio',
      options: ['square', 'rounded'],
    },
    children: {
      control: false,
    },
  },
};
