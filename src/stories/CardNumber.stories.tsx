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
    setCardStatus: createCardNumberHandlers(),
  },
};

export const FilledVisa: Story = {
  args: {
    cardNumber: visaCardStatus,
    setCardStatus: createCardNumberHandlers(),
  },
};

export const FilledMastercard: Story = {
  args: {
    cardNumber: masterCardStatus,
    setCardStatus: createCardNumberHandlers(),
  },
};

export const FilledDiners: Story = {
  args: {
    cardNumber: dinersCardStatus,
    setCardStatus: createCardNumberHandlers(),
  },
};

export const FilledAMEX: Story = {
  args: {
    cardNumber: amexCardStatus,
    setCardStatus: createCardNumberHandlers(),
  },
};

export const FilledUnionPay: Story = {
  args: {
    cardNumber: unionPayCardStatus,
    setCardStatus: createCardNumberHandlers(),
  },
};

export const Error: Story = {
  args: {
    cardNumber: {
      cardNumbers: ['412a', '1234', '1234', '1234'],
      cardNumberErrorMode: 'notNumber',
      cardBrand: '',
    },
    setCardStatus: createCardNumberHandlers(),
  },
};

export const UnknownBrandError: Story = {
  args: {
    cardNumber: {
      cardNumbers: ['9912', '1234', '1234', '1234'],
      cardNumberErrorMode: 'notExistBrand',
      cardBrand: '',
    },
    setCardStatus: createCardNumberHandlers(),
  },
};

export const Interactive: Story = {
  args: {
    cardNumber: emptyCardStatus,
    setCardStatus: createCardNumberHandlers(),
  },
  render: () => {
    const [cardNumber, setCardStatus] = useCardNumber();

    return (
      <div>
        <CardNumber cardNumber={cardNumber} setCardStatus={setCardStatus} />

        <div style={{ marginTop: '16px' }}>입력값: {cardNumber.cardNumbers.join(' - ')}</div>
      </div>
    );
  },
};
