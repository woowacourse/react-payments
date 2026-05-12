import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: '확인',
    variant: 'primary',
    size: 'md',
    rounded: true,
    disabled: false,
  },
  render: (args) => (
    <div style={{ width: '200px' }}>
      <Button {...args}></Button>
    </div>
  ),
};

export const Large: Story = {
  args: {
    children: '확인',
    variant: 'primary',
    size: 'lg',
    rounded: true,
    disabled: false,
  },
  render: (args) => (
    <div style={{ width: '200px' }}>
      <Button {...args}></Button>
    </div>
  ),
};

export const Rectangular: Story = {
  args: {
    children: '확인',
    variant: 'primary',
    size: 'lg',
    rounded: false,
    disabled: false,
  },
  render: (args) => (
    <div style={{ width: '200px' }}>
      <Button {...args}></Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: '확인',
    variant: 'primary',
    size: 'lg',
    rounded: true,
    disabled: true,
  },
  render: (args) => (
    <div style={{ width: '200px' }}>
      <Button {...args}></Button>
    </div>
  ),
};
