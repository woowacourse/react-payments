import type { Meta } from '@storybook/react';
import CardNumber from './CardNumber';
import { useControlledCardNumber } from './hooks/useControlledCardNumber';
import { useState } from 'react';

const meta = {
  title: 'card/CardNumber',
  component: CardNumber,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const { cardNumberRefs, cardNumber, cardNumberErrorMessage, handleCardNumberInputChange } =
        useControlledCardNumber();

      return (
        <Story
          args={{
            cardNumberRefs,
            cardNumber,
            cardNumberErrorMessage,
            handleCardNumberInputChange,
          }}
        />
      );
    },
  ],
} satisfies Meta<typeof CardNumber>;

export default meta;

export const Default = {};

export const Valid = {
  render: function Render() {
    const { cardNumberRefs, handleCardNumberInputChange } = useControlledCardNumber();

    const [cardNumber] = useState({
      first: '1234',
      second: '4567',
      third: '8910',
      fourth: '1112',
    });

    const [cardNumberErrorMessage] = useState({
      first: '',
      second: '',
      third: '',
      fourth: '',
    });

    return (
      <CardNumber
        cardNumberRefs={cardNumberRefs}
        cardNumber={cardNumber}
        cardNumberErrorMessage={cardNumberErrorMessage}
        handleCardNumberInputChange={handleCardNumberInputChange}
      />
    );
  },
};

export const Error = {
  render: function Render() {
    const { cardNumberRefs, handleCardNumberInputChange } = useControlledCardNumber();

    const [cardNumber] = useState({
      first: 'd455',
      second: 's4565',
      third: '1234',
      fourth: '5678',
    });

    const [cardNumberErrorMessage] = useState({
      first: '숫자만 입력 가능합니다.',
      second: '숫자만 입력 가능합니다.',
      third: '',
      fourth: '',
    });

    return (
      <CardNumber
        cardNumberRefs={cardNumberRefs}
        cardNumber={cardNumber}
        cardNumberErrorMessage={cardNumberErrorMessage}
        handleCardNumberInputChange={handleCardNumberInputChange}
      />
    );
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
