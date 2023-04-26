import type { Meta } from '@storybook/react';
import CardExpirationDate from '../../components/CardAddForm/CardExpirationDate/CardExpirationDate';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';

const meta = {
  title: 'Payments/Cards/CardExpirationDateInput',
  component: CardExpirationDate,
  tags: ['autodocs'],
} satisfies Meta<typeof CardExpirationDate>;

export default meta;

export const Default = () => {
  const { cardInformation, inputError, updateInputError, handleSingleInputChange } =
    useCardAddForm();

  return (
    <CardExpirationDate
      value={cardInformation.expirationDate}
      isError={inputError.expirationDate}
      onInputChange={handleSingleInputChange}
      updateCardInputError={updateInputError}
      moveFocus={() => {}}
    />
  );
};
