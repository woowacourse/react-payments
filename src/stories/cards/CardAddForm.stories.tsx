import type { Meta } from '@storybook/react';
import CardAddForm from '../../components/CardAddForm/CardAddForm';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';

const meta = {
  title: 'Payments/Cards/CardAddForm',
  component: CardAddForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CardAddForm>;

export default meta;

export const Default = () => {
  const {
    cardInformation,
    inputValidation,
    inputError,
    updateInputError,
    handleButtonInputChange,
    handleSingleInputChange,
    handleMultipleInputChange,
    handleSubmit,
  } = useCardAddForm();

  return (
    <CardAddForm
      cardInformation={cardInformation}
      cardInputValidation={inputValidation}
      cardInputError={inputError}
      onButtonInputChange={handleButtonInputChange}
      onSingleInputChange={handleSingleInputChange}
      onMultipleInputChange={handleMultipleInputChange}
      updateCardInputError={updateInputError}
      handleSubmit={handleSubmit}
    />
  );
};
