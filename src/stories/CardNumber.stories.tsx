import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
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

function CardNumberWithState() {
  const [cardStatus, setCardStatus] = useCardNumber();

  return (
    <div>
      <CardNumber
        cardStatus={cardStatus}
        onChangeCardNumber={setCardStatus.handleCardNumbers}
        onValidateCardNumber={setCardStatus.validateCardNumbers}
      />
      <div data-testid="card-brand" style={{ marginTop: '16px' }}>
        브랜드: {cardStatus.cardBrand}
      </div>
      <div style={{ marginTop: '8px' }}>입력값: {cardStatus.cardNumbers.join(' - ')}</div>
    </div>
  );
}

export const Default: Story = {
  args: {
    cardStatus: {
      cardNumbers: ['', '', '', ''],
      cardNumberErrorMode: 'normal',
      cardBrand: 'unknown',
    },
    onChangeCardNumber: () => fn(),
    onValidateCardNumber: fn(),
  },
};

export const Filled: Story = {
  args: {
    cardStatus: {
      cardNumbers: ['4123', '1234', '1234', '1234'],
      cardNumberErrorMode: 'normal',
      cardBrand: 'visa',
    },
    onChangeCardNumber: () => fn(),
    onValidateCardNumber: fn(),
  },
};

export const Error: Story = {
  args: {
    cardStatus: {
      cardNumbers: ['412a', '1234', '1234', '1234'],
      cardNumberErrorMode: 'notNumber',
      cardBrand: 'visa',
    },
    onChangeCardNumber: () => fn(),
    onValidateCardNumber: fn(),
  },
};

export const Interactive: Story = {
  args: {
    cardStatus: {
      cardNumbers: ['', '', '', ''],
      cardNumberErrorMode: 'normal',
      cardBrand: 'unknown',
    },
    onChangeCardNumber: () => fn(),
    onValidateCardNumber: fn(),
  },
  render: () => {
    return <CardNumberWithState />;
  },
};

export const VisaInput: Story = {
  args: {
    cardStatus: {
      cardNumbers: ['', '', '', ''],
      cardNumberErrorMode: 'normal',
      cardBrand: 'unknown',
    },
    onChangeCardNumber: () => fn(),
    onValidateCardNumber: fn(),
  },
  render: () => {
    return <CardNumberWithState />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getByLabelText('카드 번호 1번째 입력창');

    await userEvent.type(firstInput, '4');

    await expect(firstInput).toHaveValue('4');
    await expect(canvas.getByTestId('card-brand')).toHaveTextContent('visa');
  },
};

export const MasterInput: Story = {
  args: {
    cardStatus: {
      cardNumbers: ['', '', '', ''],
      cardNumberErrorMode: 'normal',
      cardBrand: 'unknown',
    },
    onChangeCardNumber: () => fn(),
    onValidateCardNumber: fn(),
  },
  render: () => {
    return <CardNumberWithState />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getByLabelText('카드 번호 1번째 입력창');

    await userEvent.type(firstInput, '51');

    await expect(firstInput).toHaveValue('51');
    await expect(canvas.getByTestId('card-brand')).toHaveTextContent('master');
  },
};
