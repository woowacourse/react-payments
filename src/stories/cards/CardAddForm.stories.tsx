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
    cardInputValidation,
    handleButtonInputChange,
    handleSingleInputChange,
    handleMultipleInputChange,
    handleSubmit,
  } = useCardAddForm();

  return (
    <CardAddForm
      cardInformation={cardInformation}
      cardInputValidation={cardInputValidation}
      onButtonInputChange={handleButtonInputChange}
      onSingleInputChange={handleSingleInputChange}
      onMultipleInputChange={handleMultipleInputChange}
      handleSubmit={handleSubmit}
    ></CardAddForm>
  );
};
