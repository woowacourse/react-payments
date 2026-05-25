import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';
import CardExpiryDateInput from '../components/AddCardForm/CardExpiryDateInput';
import useCardForm from '../hooks/useCardForm';

function Demo() {
  const { cardExpiryDate } = useCardForm();
  return <CardExpiryDateInput field={cardExpiryDate} />;
}

const meta = {
  title: 'CardForm/CardExpiryDateInput',
  component: CardExpiryDateInput,
  tags: ['autodocs'],
  args: { field: null as any },
} satisfies Meta<typeof CardExpiryDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Demo />,
};

export const Filled: Story = {
  render: () => <Demo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [monthInput] = canvas.getAllByRole('textbox');
    await userEvent.type(monthInput, '12');
    await userEvent.tab();
    const [, yearInput] = canvas.getAllByRole('textbox');
    await userEvent.type(yearInput, '26');
  },
};

export const WithError: Story = {
  render: () => <Demo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [monthInput] = canvas.getAllByRole('textbox');
    await userEvent.type(monthInput, '13');
    await userEvent.tab();
  },
};
