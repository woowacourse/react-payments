import type { Meta, StoryObj } from '@storybook/react';
import Button from '../../components/common/Button/Button';

const meta = {
  title: 'Payments/Common/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    children: 'Button',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    primary: true,
    children: 'Button',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    children: 'Button',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    primary: false,
    children: 'Button',
    disabled: true,
  },
};
