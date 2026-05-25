import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';
import CardPasswordInput from '../components/AddCardForm/CardPasswordInput';
import useCardForm from '../hooks/useCardForm';

function Demo() {
  const { cardPassword } = useCardForm();
  return <CardPasswordInput field={cardPassword} />;
}

const meta = {
  title: 'CardForm/CardPasswordInput',
  component: CardPasswordInput,
  tags: ['autodocs'],
  args: { field: null as any },
} satisfies Meta<typeof CardPasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Demo />,
};

export const Filled: Story = {
  render: () => <Demo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('**');
    await userEvent.type(input, '12');
  },
};

export const WithError: Story = {
  render: () => <Demo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('**');
    await userEvent.type(input, '1');
    await userEvent.tab();
  },
};
