import CardCVCNumber from './CardCVCNumber';
import type { Meta } from '@storybook/react';
import { useState } from '@storybook/preview-api';
import { ERROR_MESSAGE } from '../../../constants';
import { useControlledCardCVCNumber } from './hooks/useControlledCardCVCNumber';

const meta = {
  title: 'card/CardCVCNumber',
  component: CardCVCNumber,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const { cardCVCNumber, cardCVCNumberErrorMessage, handleCardCVCNumberInputChange } = useControlledCardCVCNumber();

      return (
        <Story
          args={{
            cardCVCNumber,
            cardCVCNumberErrorMessage,
            handleCardCVCNumberInputChange,
          }}
        />
      );
    },
  ],
} satisfies Meta<typeof CardCVCNumber>;

export default meta;

export const Default = {};

export const Valid = {
  render: function Render() {
    const { handleCardCVCNumberInputChange } = useControlledCardCVCNumber();

    const [cardCVCNumber] = useState('313');

    const [cardCVCNumberErrorMessage] = useState('');

    return (
      <CardCVCNumber
        cardCVCNumber={cardCVCNumber}
        cardCVCNumberErrorMessage={cardCVCNumberErrorMessage}
        handleCardCVCNumberInputChange={handleCardCVCNumberInputChange}
      />
    );
  },
};

export const Error = {
  render: function Render() {
    const { handleCardCVCNumberInputChange } = useControlledCardCVCNumber();

    const [cardCVCNumber] = useState('우테코');

    const [cardCVCNumberErrorMessage] = useState(ERROR_MESSAGE.onlyNumber);

    return (
      <CardCVCNumber
        cardCVCNumber={cardCVCNumber}
        cardCVCNumberErrorMessage={cardCVCNumberErrorMessage}
        handleCardCVCNumberInputChange={handleCardCVCNumberInputChange}
      />
    );
  },
};
