import type { Meta, StoryObj } from '@storybook/react';
import CardCVCNumber from './CardCVCNumber';
import { useState } from '@storybook/preview-api';
import { ERROR_MESSAGE } from '../../../constants';

const meta = {
  title: 'CardCVCNumber',
  component: CardCVCNumber,
  tags: ['autodocs'],
} satisfies Meta<typeof CardCVCNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardCVCNumber: '',
    cardCVCNumberErrorMessage: '',
    setCardCVCNumber: () => {},
    setCardCVCNumberErrorMessage: () => {},
  },
  render: function Render(args) {
    const [cardCVCNumber, setCardCVCNumber] = useState<string>('');
    const [cardCVCNumberErrorMessage, setCardCVCNumberErrorMessage] = useState<string>('');
    return (
      <CardCVCNumber
        cardCVCNumber={cardCVCNumber}
        setCardCVCNumber={setCardCVCNumber}
        cardCVCNumberErrorMessage={cardCVCNumberErrorMessage}
        setCardCVCNumberErrorMessage={setCardCVCNumberErrorMessage}
      ></CardCVCNumber>
    );
  },
};

export const Valid: Story = {
  args: {
    cardCVCNumber: '313',
    cardCVCNumberErrorMessage: '',
    setCardCVCNumber: () => {},
    setCardCVCNumberErrorMessage: () => {},
  },
};

export const Error: Story = {
  args: {
    cardCVCNumber: '우테코',
    cardCVCNumberErrorMessage: ERROR_MESSAGE.onlyNumber,
    setCardCVCNumber: () => {},
    setCardCVCNumberErrorMessage: () => {},
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
