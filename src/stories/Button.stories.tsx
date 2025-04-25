import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/common/Button';

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
    disabled: false,
    isRounded: false,
    children: '버튼',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    isRounded: {
      control: { type: 'boolean' },
    },
  },
  render: (args) => {
    return <Button {...args} />;
  },
};

export const DisabledButton: Story = {
  args: {
    ...Default.args,
    disabled: true,
    children: '비활성화된 버튼',
  },
  render: (args) => {
    return <Button {...args} />;
  },
};

export const RoundedButton: Story = {
  args: {
    ...Default.args,
    isRounded: true,
    children: '라운드 버튼',
  },
  render: (args) => {
    return <Button {...args} />;
  },
};
