import { Meta, StoryObj } from '@storybook/react';
import CardExpiredDate from '../components/CardExpiredDate/CardExpiredDates';
import RefProvider from '../contexts/RefProvider';
import useExpiredDates from '../hooks/useExpiredDates';
import { userEvent, within } from '@storybook/testing-library';

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

type Story = StoryObj<typeof CardExpiredDate>;

export const Default: Story = {
  render: () => {
    const { expiredDates, expiredDatesError, isValidatedExpiredDates } =
      useExpiredDates();

    return (
      <CardExpiredDate
        expiredDates={expiredDates}
        errorMessage={expiredDatesError}
        isValidatedExpiredDates={isValidatedExpiredDates}
      />
    );
  },
};

export const SuccessInteraction: Story = {
  render: () => {
    const { expiredDates, expiredDatesError, isValidatedExpiredDates } =
      useExpiredDates();

    return (
      <CardExpiredDate
        expiredDates={expiredDates}
        errorMessage={expiredDatesError}
        isValidatedExpiredDates={isValidatedExpiredDates}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const expiredMonthInput = canvas.queryByPlaceholderText('MM');
    const expiredYearInput = canvas.queryByPlaceholderText('YY');

    if (!expiredMonthInput) return;
    if (!expiredYearInput) return;

    await userEvent.type(expiredMonthInput, '12', { delay: 200 });
    await userEvent.type(expiredYearInput, '25', { delay: 200 });
  },
};

export const FailureInteraction: Story = {
  render: () => {
    const { expiredDates, expiredDatesError, isValidatedExpiredDates } =
      useExpiredDates();

    return (
      <CardExpiredDate
        expiredDates={expiredDates}
        errorMessage={expiredDatesError}
        isValidatedExpiredDates={isValidatedExpiredDates}
      />
    );
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const expiredMonthInput = canvas.queryByPlaceholderText('MM');
    const expiredYearInput = canvas.queryByPlaceholderText('YY');

    if (!expiredMonthInput) return;
    if (!expiredYearInput) return;

    await userEvent.type(expiredMonthInput, '5R', { delay: 200 });
    await userEvent.type(expiredYearInput, '1ㄱ', { delay: 200 });
  },
};
