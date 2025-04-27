import type {Meta, StoryObj} from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'components/button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: '확인',
  },
};

export const Danger: Story = {
  args: {
    bgColor: '#FF3D3D',
    children: '취소',
  },
};
