import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import CardExpiryDate from '../components/CardExpiryDate';
import { useExpiryDate } from '../hooks/useExpiryDate';

const meta = {
  title: 'Components/CardExpiryDate',
  component: CardExpiryDate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardExpiryDate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['', ''],
      cardExpiryDateErrorMode: 'normal',
    },
    setCardExpiry: {
      handleCardExpiryDate: () => fn(),
      handleYearBlur: () => fn(),
      handleMonthBlur: () => fn(),
    },
  },
};

export const Filled: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['12', '11'],
      cardExpiryDateErrorMode: 'normal',
    },
    setCardExpiry: {
      handleCardExpiryDate: () => fn(),
      handleYearBlur: () => fn(),
      handleMonthBlur: () => fn(),
    },
  },
};

export const EmptyBothError: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['', ''],
      cardExpiryDateErrorMode: 'emptyBoth',
    },
    setCardExpiry: {
      handleCardExpiryDate: () => fn(),
      handleYearBlur: () => fn(),
      handleMonthBlur: () => fn(),
    },
  },
};

export const EmptyMonthError: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['', '22'],
      cardExpiryDateErrorMode: 'emptyMonth',
    },
    setCardExpiry: {
      handleCardExpiryDate: () => fn(),
      handleYearBlur: () => fn(),
      handleMonthBlur: () => fn(),
    },
  },
};

export const emptyYearError: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['10', ''],
      cardExpiryDateErrorMode: 'emptyYear',
    },
    setCardExpiry: {
      handleCardExpiryDate: () => fn(),
      handleYearBlur: () => fn(),
      handleMonthBlur: () => fn(),
    },
  },
};

export const Interactive: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['', ''],
      cardExpiryDateErrorMode: 'normal',
    },
    setCardExpiry: {
      handleCardExpiryDate: () => fn(),
      handleYearBlur: () => fn(),
      handleMonthBlur: () => fn(),
    },
  },
  render: () => {
    const [cardExpiry, setCardExpiry] = useExpiryDate();

    return (
      <div>
        <CardExpiryDate cardExpiry={cardExpiry} setCardExpiry={setCardExpiry} />

        <div style={{ marginTop: '16px' }}>입력값: {cardExpiry.cardExpiryDate.join('/')}</div>
      </div>
    );
  },
};
