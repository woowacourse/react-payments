import { Meta, StoryObj } from '@storybook/react';
import StoryProvider from 'stories/StoryProvider';
import useCreditCardForm from 'hooks/useCreditCardForm';
import { useEffect } from 'react';
import { within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import sleep from 'stories/sleep';
import CreditCardNicknameInputForm from './CreditCardNicknameInputForm';

const meta = {
  title: 'CreditCardNicknameInputForm',
  component: CreditCardNicknameInputForm,
  decorators: [
    (Story) => (
      <StoryProvider>
        <Story />
      </StoryProvider>
    ),
  ],
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const { initCreditCardForm } = useCreditCardForm();
    useEffect(() => {
      initCreditCardForm();
    }, []);

    return (
      <CreditCardNicknameInputForm />
    );
  },
  play: async ({ canvasElement }) => {
    const input = within(canvasElement).getByTestId('nickname-input');
    await userEvent.type(input, '교통 카드', { delay: 200 });

    await sleep(2000);

    const button = within(canvasElement).getByText('확인');
    await userEvent.click(button);
  },
  args: {

  },
};
