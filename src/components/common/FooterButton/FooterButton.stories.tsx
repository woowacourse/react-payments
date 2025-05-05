import type { Meta, StoryObj } from '@storybook/react';
import FooterButton from './FooterButton';

const meta: Meta<typeof FooterButton> = {
  title: 'Components/FooterButton',
  component: FooterButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['middle', 'large'],
    },
    children: {
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<typeof FooterButton>;

export const Default: Story = {
  args: {
    size: 'large',
    children: '확인',
  },
};

export const MiddleSize: Story = {
  args: {
    size: 'middle',
    children: '취소',
  },
};
