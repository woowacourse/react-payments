import type { Meta } from '@storybook/react';
import CardPassword from '../../components/CardAddForm/CardPassword/CardPassword';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';

const meta = {
  title: 'Payments/Cards/CardPasswordInput',
  component: CardPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof CardPassword>;

export default meta;

export const Default = () => {
  const { cardInformation, inputError, updateInputError, handleMultipleInputChange } =
    useCardAddForm();

  return (
    <CardPassword
      values={cardInformation.password}
      isError={inputError.password}
      onInputChange={handleMultipleInputChange}
      updateCardInputError={updateInputError}
    />
  );
};
