import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';
import CardIssuerSelect from '../components/AddCardForm/CardIssuerSelect';
import useCardForm from '../hooks/useCardForm';

function Demo() {
  const { cardIssuer } = useCardForm();
  return <CardIssuerSelect field={cardIssuer} />;
}

const meta = {
  title: 'CardForm/CardIssuerSelect',
  component: CardIssuerSelect,
  tags: ['autodocs'],
  args: { field: null as any },
} satisfies Meta<typeof CardIssuerSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Demo />,
};

export const WithError: Story = {
  render: () => <Demo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole('combobox');
    await userEvent.click(select);
    await userEvent.tab();
  },
};
