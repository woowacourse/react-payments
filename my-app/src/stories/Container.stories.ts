import type { Meta, StoryObj } from '@storybook/react';
import Container from '../components/container';

const meta = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: { type: 'radio' },
      options: ['CARD', 'EXP', 'CVC'],
      description: '입력 필드 모드 선택',
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    mode: 'CARD',
  },
};

export const Expiration: Story = {
  args: {
    mode: 'EXP',
  },
};

export const CVC: Story = {
  args: {
    mode: 'CVC',
  },
};
