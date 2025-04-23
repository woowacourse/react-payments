import type { Meta, StoryObj } from '@storybook/react';
import { Title } from '@/components';

const meta = {
  title: 'Title',
  component: Title,
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '타이틀',
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
