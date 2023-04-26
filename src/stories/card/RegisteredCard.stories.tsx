import { Meta, StoryObj } from '@storybook/react';
import RegisteredCard from '../../components/card/RegisteredCard';

const meta: Meta<typeof RegisteredCard> = {
  component: RegisteredCard,
  title: 'RegisteredCard',
};

export default meta;
type Story = StoryObj<typeof RegisteredCard>;

export const Default: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '12',
    year: '28',
  },
};
