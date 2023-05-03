import { Meta, StoryObj } from '@storybook/react';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';

const meta = {
  component: CardOwnerName,
  title: 'Section/CardOwnerName',
} satisfies Meta<typeof CardOwnerName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardOwnerNameStory: Story = {
  args: {
    cardOwnerName: 'NAME',
    errorMessage: '',
    handleCardOwnerName: () => {
      return;
    },
  },
};
