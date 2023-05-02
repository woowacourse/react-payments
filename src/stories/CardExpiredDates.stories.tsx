import { Meta, StoryObj } from '@storybook/react';
import CardExpiredDate from '../components/CardExpiredDate/CardExpiredDates';

const meta = {
  component: CardExpiredDate,
  title: 'Section/ExpiredDate',
} satisfies Meta<typeof CardExpiredDate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardExpiredDateStory: Story = {
  args: {
    expiredDates: ['02', '12'],
    errorMessage: '',
    handleExpiredDates: () => {
      return;
    },
  },
};
