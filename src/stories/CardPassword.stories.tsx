import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import CardPassword from '../components/CardPassword';

const meta = {
  title: 'Components/CardPassword',
  component: CardPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardPassword: {
      cardPassword: '',
      cardPasswordErrorMode: null,
    },
    setCardPassword: {
      handleCardPassword: fn(),
      handlePasswordBlur: fn(),
    },
  },
};

export const Filled: Story = {
  args: {
    cardPassword: {
      cardPassword: '12',
      cardPasswordErrorMode: null,
    },
    setCardPassword: {
      handleCardPassword: fn(),
      handlePasswordBlur: fn(),
    },
  },
};
