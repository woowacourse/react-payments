import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import CardNumber from '../components/CardNumber';
import { useCardNumber } from '../hooks/useCardNumber';

const meta = {
  title: 'Components/CardNumber',
  component: CardNumber,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardStatus: {
      cardNumbers: ['', '', '', ''],
      cardNumberErrorMode: 'normal',
      cardBrand: '',
    },
    setCardStatus: {
      handleCardNumbers: () => fn(),
      handleCardNumbersBlur: () => fn(),
    },
  },
};

export const Filled: Story = {
  args: {
    cardStatus: {
      cardNumbers: ['4123', '1234', '1234', '1234'],
      cardNumberErrorMode: 'normal',
      cardBrand: 'visa',
    },
    setCardStatus: {
      handleCardNumbers: () => fn(),
      handleCardNumbersBlur: () => fn(),
    },
  },
};

export const Error: Story = {
  args: {
    cardStatus: {
      cardNumbers: ['412a', '1234', '1234', '1234'],
      cardNumberErrorMode: 'notNumber',
      cardBrand: 'visa',
    },
    setCardStatus: {
      handleCardNumbers: () => fn(),
      handleCardNumbersBlur: () => fn(),
    },
  },
};

export const Interactive: Story = {
  args: {
    cardStatus: {
      cardNumbers: ['', '', '', ''],
      cardNumberErrorMode: 'normal',
      cardBrand: '',
    },
    setCardStatus: {
      handleCardNumbers: () => fn(),
      handleCardNumbersBlur: () => fn(),
    },
  },
  render: () => {
    const [cardStatus, setCardStatus] = useCardNumber();

    return (
      <div>
        <CardNumber cardStatus={cardStatus} setCardStatus={setCardStatus} />

        <div style={{ marginTop: '16px' }}>입력값: {cardStatus.cardNumbers.join(' - ')}</div>
      </div>
    );
  },
};
