import { Meta, StoryFn } from '@storybook/react';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';
import useOwnerName from '../hooks/useOwnerName';

const meta = {
  component: CardOwnerName,
  title: 'Section/CardOwnerName',
} satisfies Meta<typeof CardOwnerName>;

export default meta;
type Story = StoryFn<typeof meta>;

export const CardOwnerNameStory: Story = () => {
  const { cardOwnerName, ownerNameError, handleCardOwnerName } = useOwnerName();

  return (
    <CardOwnerName
      cardOwnerName={cardOwnerName}
      errorMessage={ownerNameError}
      handleCardOwnerName={handleCardOwnerName}
    />
  );
};
