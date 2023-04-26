import type { Meta } from '@storybook/react';
import CardNumber from '../../components/CardAddForm/CardNumber/CardNumber';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';

const meta = {
  title: 'Payments/Cards/CardNumberInput',
  component: CardNumber,
  tags: ['autodocs'],
} satisfies Meta<typeof CardNumber>;

export default meta;

export const Default = () => {
  const { cardInformation, inputError, updateInputError, handleSingleInputChange } =
    useCardAddForm();

  return (
    <CardNumber
      value={cardInformation.cardNumber}
      isError={inputError.cardNumber}
      onInputChange={handleSingleInputChange}
      updateCardInputError={updateInputError}
      moveFocus={() => {}}
    />
  );
};
