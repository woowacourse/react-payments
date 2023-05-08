import { Meta, StoryFn } from '@storybook/react';
import CardExpiredDate from '../components/CardExpiredDate/CardExpiredDates';
import RefProvider from '../contexts/RefProvider';
import useExpiredDates from '../hooks/useExpiredDates';

const meta = {
  component: CardExpiredDate,
  title: 'Section/CardExpiredDate',
  decorators: [
    (Story) => (
      <RefProvider>
        <Story />
      </RefProvider>
    ),
  ],
} satisfies Meta<typeof CardExpiredDate>;

export default meta;

type Story = StoryFn<typeof meta>;

export const Default: Story = () => {
  const { expiredDates, expiredDatesError, isValidatedExpiredDates } =
    useExpiredDates();

  return (
    <CardExpiredDate
      expiredDates={expiredDates}
      errorMessage={expiredDatesError}
      isValidatedExpiredDates={isValidatedExpiredDates}
    />
  );
};
