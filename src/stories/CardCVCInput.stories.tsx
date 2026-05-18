import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';
import CardCVCInput from '../components/AddCardForm/CardCVCInput';
import useCardForm from '../hooks/useCardForm';

function Demo() {
  const { cardValidationCode } = useCardForm();
  return <CardCVCInput field={cardValidationCode} />;
}

const meta = {
  title: 'CardForm/CardCVCInput',
  component: CardCVCInput,
  tags: ['autodocs'],
  args: { field: null as any },
} satisfies Meta<typeof CardCVCInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Demo />,
};

export const Filled: Story = {
  render: () => <Demo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('CVC');
    await userEvent.type(input, '123');
  },
};

export const WithError: Story = {
  render: () => <Demo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('CVC');
    await userEvent.type(input, '12');
    await userEvent.tab();
  },
};
