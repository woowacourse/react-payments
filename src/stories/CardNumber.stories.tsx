import type { Meta, StoryObj } from '@storybook/react-vite';
import CardNumber from '../components/CardNumber';
import { useCardNumber } from '../hooks/useCardNumber';
import {
  amexCardStatus,
  createCardNumberHandlers,
  dinersCardStatus,
  emptyCardStatus,
  masterCardStatus,
  unionPayCardStatus,
  visaCardStatus,
} from './cardStoryFixtures';

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
    cardNumber: emptyCardStatus,
    setCardNumber: createCardNumberHandlers(),
  },
};

export const FilledVisa: Story = {
  args: {
    cardNumber: visaCardStatus,
    setCardNumber: createCardNumberHandlers(),
  },
};

export const FilledMastercard: Story = {
  args: {
    cardNumber: masterCardStatus,
    setCardNumber: createCardNumberHandlers(),
  },
};

export const FilledDiners: Story = {
  args: {
    cardNumber: dinersCardStatus,
    setCardNumber: createCardNumberHandlers(),
  },
};

export const FilledAMEX: Story = {
  args: {
    cardNumber: amexCardStatus,
    setCardNumber: createCardNumberHandlers(),
  },
};

export const FilledUnionPay: Story = {
  args: {
    cardNumber: unionPayCardStatus,
    setCardNumber: createCardNumberHandlers(),
  },
};

export const Error: Story = {
  args: {
    cardNumber: {
      cardNumbers: ['412a', '1234', '1234', '1234'],
      cardNumberErrorMode: 'notNumber',
      cardBrand: '',
    },
    setCardNumber: createCardNumberHandlers(),
  },
};

export const UnknownBrandError: Story = {
  args: {
    cardNumber: {
      cardNumbers: ['9912', '1234', '1234', '1234'],
      cardNumberErrorMode: 'notExistBrand',
      cardBrand: '',
    },
    setCardNumber: createCardNumberHandlers(),
  },
};

export const Interactive: Story = {
  args: {
    cardNumber: emptyCardStatus,
    setCardNumber: createCardNumberHandlers(),
  },
  render: () => {
    const { cardNumber, cardNumberHandler } = useCardNumber();

    return (
      <div>
        <CardNumber cardNumber={cardNumber} setCardNumber={cardNumberHandler} />

        <div style={{ marginTop: '16px' }}>입력값: {cardNumber.cardNumbers.join(' - ')}</div>
      </div>
    );
  },
};
