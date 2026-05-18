import type { Meta, StoryObj } from '@storybook/react-vite';
import CardExpiryDate from '../components/CardExpiryDate';
import { useCardExpiry } from '../hooks/useCardExpiry';
import { createExpiryHandlers, emptyExpiry, filledExpiry } from './cardStoryFixtures';

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
    cardExpiry: emptyExpiry,
    setCardExpiry: createExpiryHandlers(),
  },
};

export const Filled: Story = {
  args: {
    cardExpiry: filledExpiry,
    setCardExpiry: createExpiryHandlers(),
  },
};

export const EmptyBothError: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['', ''],
      cardExpiryDateErrorMode: 'emptyBoth',
    },
    setCardExpiry: createExpiryHandlers(),
  },
};

export const EmptyMonthError: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['', '22'],
      cardExpiryDateErrorMode: 'emptyMonth',
    },
    setCardExpiry: createExpiryHandlers(),
  },
};

export const EmptyYearError: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['10', ''],
      cardExpiryDateErrorMode: 'emptyYear',
    },
    setCardExpiry: createExpiryHandlers(),
  },
};

export const MonthRangeError: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['13', '29'],
      cardExpiryDateErrorMode: 'notMonthRange',
    },
    setCardExpiry: createExpiryHandlers(),
  },
};

export const NotNumberError: Story = {
  args: {
    cardExpiry: {
      cardExpiryDate: ['0a', '2b'],
      cardExpiryDateErrorMode: 'notMonthNumber',
    },
    setCardExpiry: createExpiryHandlers(),
  },
};

export const Interactive: Story = {
  args: {
    cardExpiry: emptyExpiry,
    setCardExpiry: createExpiryHandlers(),
  },
  render: () => {
    const [cardExpiry, setCardExpiry] = useCardExpiry();

    return (
      <div>
        <CardExpiryDate cardExpiry={cardExpiry} setCardExpiry={setCardExpiry} />

        <div style={{ marginTop: '16px' }}>입력값: {cardExpiry.cardExpiryDate.join('/')}</div>
      </div>
    );
  },
};
