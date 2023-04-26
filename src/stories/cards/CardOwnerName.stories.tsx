import type { Meta } from '@storybook/react';
import CardOwnerName from '../../components/CardAddForm/CardOwnerName/CardOwnerName';
import { useCardAddForm } from '../../hooks/cards/useCardAddForm';

const meta = {
  title: 'Payments/Cards/CardOwnerNameInput',
  component: CardOwnerName,
  tags: ['autodocs'],
} satisfies Meta<typeof CardOwnerName>;

export default meta;

export const Default = () => {
  const { cardInformation, handleSingleInputChange } = useCardAddForm();

  return (
    <CardOwnerName
      value={cardInformation.ownerName}
      onInputChange={handleSingleInputChange}
      moveFocus={() => {}}
    />
  );
};
