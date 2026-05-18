import type { Meta, StoryObj } from '@storybook/react-vite';
import { userEvent, within } from 'storybook/test';
import CardNumberSegmentsInput from '../components/AddCardForm/CardNumberSegmentsInput';
import useCardForm from '../hooks/useCardForm';

function Demo() {
  const { cardNumberSegments } = useCardForm();
  return <CardNumberSegmentsInput field={cardNumberSegments} />;
}

const meta = {
  title: 'CardForm/CardNumberSegmentsInput',
  component: CardNumberSegmentsInput,
  tags: ['autodocs'],
  args: { field: null as any },
} satisfies Meta<typeof CardNumberSegmentsInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Demo />,
};

export const Filled: Story = {
  render: () => <Demo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByPlaceholderText('1234');
    await userEvent.type(inputs[0], '4123');
    await userEvent.type(inputs[1], '4567');
    await userEvent.type(inputs[2], '8901');
    await userEvent.type(inputs[3], '2345');
  },
};

export const WithError: Story = {
  render: () => <Demo />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput] = canvas.getAllByPlaceholderText('1234');
    await userEvent.type(firstInput, '123');
    await userEvent.tab();
  },
};
