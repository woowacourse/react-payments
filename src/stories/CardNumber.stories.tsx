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
    cardStatus: emptyCardStatus,
    setCardStatus: createCardNumberHandlers(),
  },
};

export const FilledVisa: Story = {
  args: {
    cardStatus: visaCardStatus,
    setCardStatus: createCardNumberHandlers(),
  },
};

export const FilledMastercard: Story = {
  args: {
    cardStatus: masterCardStatus,
    setCardStatus: createCardNumberHandlers(),
  },
};

export const FilledDiners: Story = {
  args: {
    cardStatus: dinersCardStatus,
    setCardStatus: createCardNumberHandlers(),
  },
};

export const FilledAMEX: Story = {
  args: {
    cardStatus: amexCardStatus,
    setCardStatus: createCardNumberHandlers(),
  },
};

export const FilledUnionPay: Story = {
  args: {
    cardStatus: unionPayCardStatus,
    setCardStatus: createCardNumberHandlers(),
  },
};

export const Error: Story = {
  args: {
    cardStatus: {
      cardNumbers: ['412a', '1234', '1234', '1234'],
      cardNumberErrorMode: 'notNumber',
      cardBrand: '',
    },
    setCardStatus: createCardNumberHandlers(),
  },
};

export const UnknownBrandError: Story = {
  args: {
    cardStatus: {
      cardNumbers: ['9912', '1234', '1234', '1234'],
      cardNumberErrorMode: 'notExistBrand',
      cardBrand: '',
    },
    setCardStatus: createCardNumberHandlers(),
  },
};

export const Interactive: Story = {
  args: {
    cardStatus: emptyCardStatus,
    setCardStatus: createCardNumberHandlers(),
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
