import { Meta, StoryObj } from '@storybook/react';
import ExpiredDate from './ExpiredDate';

const meta = {
  component: ExpiredDate,
  title: 'Section/ExpiredDate',
} satisfies Meta<typeof ExpiredDate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SecurityCodeStory: Story = {
  args: {
    expiredDates: ['02', '12'],
  },
};
