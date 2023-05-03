import { Meta, StoryObj } from '@storybook/react';
import CardExpiredDate from '../components/CardExpiredDate/CardExpiredDates';
import RefProvider from '../contexts/RefProvider';

const meta = {
  component: CardExpiredDate,
  title: 'Section/ExpiredDate',
  decorators: [
    (Story) => (
      <RefProvider>
        <Story />
      </RefProvider>
    ),
  ],
} satisfies Meta<typeof CardExpiredDate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardExpiredDateStory: Story = {
  args: {
    expiredDates: ['', ''],
    errorMessage: `유효한 만료일을 05/23의 형태로 입력해주세요.`,
    handleExpiredDates: () => {
      return;
    },
  },
};
