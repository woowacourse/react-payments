import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@/components/common/Text';

const meta = {
  title: 'common/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '텍스트 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'Title',
    fontWeight: 'regular',
    color: 'black',
    children: '텍스트',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['Title', 'Body', 'Caption'],
    },
    fontWeight: {
      control: { type: 'select' },
      options: ['regular', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: { type: 'color' },
    },
  },
  render: (args) => {
    return <Text {...args} />;
  },
};
