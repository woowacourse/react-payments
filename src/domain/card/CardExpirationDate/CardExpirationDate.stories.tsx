import CardExpirationDate from './CardExpirationDate';
import type { Meta } from '@storybook/react';
import { useState } from 'storybook/internal/preview-api';
import { ERROR_MESSAGE } from '../../../constants';
import { useControlledCardExpirationDate } from './hooks/useControlledCardExpirationDate';

const meta = {
  title: 'card/CardExpirationDate',
  component: CardExpirationDate,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const {
        cardExpirationDate,
        cardExpirationDateErrorMessage,
        cardExpirationDateRefs,
        handleCardExpirationDateInputChange,
      } = useControlledCardExpirationDate();

      return (
        <Story
          args={{
            cardExpirationDateRefs,
            cardExpirationDate,
            cardExpirationDateErrorMessage,
            handleCardExpirationDateInputChange,
          }}
        />
      );
    },
  ],
} satisfies Meta<typeof CardExpirationDate>;

export default meta;

export const Default = {};

export const Valid = {
  render: function Render() {
    const { cardExpirationDateRefs, handleCardExpirationDateInputChange } = useControlledCardExpirationDate();

    const [cardExpirationDate] = useState({
      month: '12',
      year: '25',
    });

    const [cardExpirationDateErrorMessage] = useState({
      month: '',
      year: '',
    });

    return (
      <CardExpirationDate
        cardExpirationDateRefs={cardExpirationDateRefs}
        cardExpirationDate={cardExpirationDate}
        cardExpirationDateErrorMessage={cardExpirationDateErrorMessage}
        handleCardExpirationDateInputChange={handleCardExpirationDateInputChange}
      />
    );
  },
};

export const Error = {
  render: function Render() {
    const { cardExpirationDateRefs, handleCardExpirationDateInputChange } = useControlledCardExpirationDate();

    const [cardExpirationDate] = useState({
      month: '13',
      year: '24',
    });

    const [cardExpirationDateErrorMessage] = useState({
      month: ERROR_MESSAGE.validMonth,
      year: ERROR_MESSAGE.pastYear,
    });

    return (
      <CardExpirationDate
        cardExpirationDateRefs={cardExpirationDateRefs}
        cardExpirationDate={cardExpirationDate}
        cardExpirationDateErrorMessage={cardExpirationDateErrorMessage}
        handleCardExpirationDateInputChange={handleCardExpirationDateInputChange}
      />
    );
  },
};
