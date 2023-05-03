import { Meta, StoryFn } from '@storybook/react';
import CardNumbers from '../components/CardNumbers/CardNumbers';
import RefProvider from '../contexts/RefProvider';
import useCardNumbers from '../hooks/useCardNumbers';

const meta = {
  component: CardNumbers,
  title: 'Section/CardNumbers',
  decorators: [
    (Story) => (
      <RefProvider>
        <Story />
      </RefProvider>
    ),
  ],
} satisfies Meta<typeof CardNumbers>;

export default meta;

type Story = StoryFn<typeof meta>;

export const CardNumbersStory: Story = () => {
  const { cardNumbers, cardNumbersError, handleCardNumbers } = useCardNumbers();

  return (
    <CardNumbers
      cardNumbers={cardNumbers}
      errorMessage={cardNumbersError}
      handleCardNumbers={handleCardNumbers}
    />
  );
};
