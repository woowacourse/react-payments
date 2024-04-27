import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/common/Button/Button';

const meta = {
  title: 'Button',
  component: Button,

  argTypes: {
    theme: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SubmitButton: Story = {
  parameters: {
    controls: { exclude: ['type', 'onClick'] },
  },
  args: {
    text: '확인',
    theme: 'submit',
    isActive: true,
  },
};

export const ConfirmButton: Story = {
  parameters: {
    controls: { exclude: ['type', 'onClick'] },
  },
  args: {
    text: '확인',
    theme: 'default',
    isActive: true,
  },
};
