import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';

import CardCvc from '../components/CardCvc';
import { useCardCvc } from '../hooks/useCardCvc';

const meta = {
  title: 'Components/CardCvc',
  component: CardCvc,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardCvc>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardCvc: {
      cardCvc: '',
      cardCvcErrorMode: 'normal',
    },
    setCardCvc: {
      handleCardCvc: () => fn(),
      handleCvcBlur: () => fn(),
    },
  },
};

export const Filled: Story = {
  args: {
    cardCvc: {
      cardCvc: '123',
      cardCvcErrorMode: 'normal',
    },
    setCardCvc: {
      handleCardCvc: () => fn(),
      handleCvcBlur: () => fn(),
    },
  },
};

export const NotNumberError: Story = {
  args: {
    cardCvc: {
      cardCvc: '1a',
      cardCvcErrorMode: 'notNumber',
    },
    setCardCvc: {
      handleCardCvc: () => fn(),
      handleCvcBlur: () => fn(),
    },
  },
};

export const CvcCountError: Story = {
  args: {
    cardCvc: {
      cardCvc: '12',
      cardCvcErrorMode: 'cvcCount',
    },
    setCardCvc: {
      handleCardCvc: () => fn(),
      handleCvcBlur: () => fn(),
    },
  },
};

export const Interactive: Story = {
  args: {
    cardCvc: {
      cardCvc: '',
      cardCvcErrorMode: 'normal',
    },
    setCardCvc: {
      handleCardCvc: () => fn(),
      handleCvcBlur: () => fn(),
    },
  },
  render: () => {
    const [cardCvc, setCardCvc] = useCardCvc();

    return (
      <div>
        <CardCvc cardCvc={cardCvc} setCardCvc={setCardCvc} />

        <div data-testid="card-cvc-value" style={{ marginTop: '16px' }}>
          입력값: {cardCvc.cardCvc}
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const cvcInput = canvas.getByLabelText('CVC');

    await userEvent.type(cvcInput, '123');

    await expect(cvcInput).toHaveValue('123');
    await expect(canvas.getByTestId('card-cvc-value')).toHaveTextContent('123');
  },
};
