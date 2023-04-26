import type { Meta } from '@storybook/react';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';
import CardIssuer from '../../components/CardAddForm/CardIssuer/CardIssuer';

const meta = {
  title: 'Payments/Cards/CardIssuerInput',
  component: CardIssuer,
  tags: ['autodocs'],
} satisfies Meta<typeof CardIssuer>;

export default meta;

export const Default = () => {
  const { cardInformation, inputError, updateInputError, handleButtonInputChange } =
    useCardAddForm();

  return (
    <CardIssuer
      value={cardInformation.issuer}
      isError={inputError.issuer}
      onInputChange={handleButtonInputChange}
      updateCardInputError={updateInputError}
      moveFocus={() => {}}
    />
  );
};
