import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import CardForm from '../components/CardForm/CardForm';

const meta = {
  title: 'Components/CardForm',
  component: CardForm,
  tags: ['autodocs'],
  args: {
    onSubmit: fn(),
  },
} satisfies Meta<typeof CardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
