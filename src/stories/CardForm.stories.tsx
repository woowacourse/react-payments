import type { Meta, StoryObj } from '@storybook/react-vite';
import CardForm from '../components/CardForm';

const meta = {
  title: 'Components/CardForm',
  component: CardForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <CardForm />,
};
