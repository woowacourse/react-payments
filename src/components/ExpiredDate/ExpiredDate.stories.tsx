import { Meta, StoryObj } from '@storybook/react';
import ExpiredDate from './ExpiredDate';

const meta = {
  component: ExpiredDate,
  title: 'Section/ExpiredDate',
  argTypes: {
    checkExpiredDate: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ExpiredDate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SecurityCodeStory: Story = {
  args: {
    expiredDate: {
      0: '02',
      1: '32',
    },
    checkExpiredDate: (order: number, value: string) => true,
  },
};
