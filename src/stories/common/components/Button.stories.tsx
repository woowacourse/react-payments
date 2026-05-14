import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '../../../common/components/Button';

const meta = {
  title: 'common/components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: '확인',
    type: 'button',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
