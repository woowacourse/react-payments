import { Meta, StoryObj } from '@storybook/react';
import StoryProvider from 'stories/StoryProvider';
import { within, userEvent, fireEvent } from '@storybook/testing-library';

import sleep from 'stories/sleep';
import CreditCardRegister from './CreditCardRegister';

const meta = {
  title: 'CreditCardRegister Page',
  component: CreditCardRegister,
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
  render: () => (
    <CreditCardRegister />
  ),
  play: async ({ canvasElement }) => {
    await sleep(500);

    const woori = document.querySelector('[data-testid="credit-card-company-woori"]') as HTMLElement;
    await fireEvent.click(woori);

    await sleep(500);

    const creditCardNumberViewer = within(canvasElement).getByTestId('credit-card-number-viewer');
    await userEvent.click(creditCardNumberViewer);
    await userEvent.type(creditCardNumberViewer, '1234567812345678', { delay: 100 });

    await sleep(100);
    const creditCardExpiryInput = within(canvasElement).getByTestId('credit-card-expiry-input');
    await userEvent.type(creditCardExpiryInput, '0199', { delay: 100 });

    await sleep(100);
    const creditCardOwnerInput = within(canvasElement).getByTestId('credit-card-owner-input');
    await userEvent.type(creditCardOwnerInput, 'gabriel yoon', { delay: 100 });

    await sleep(100);
    const creditCardCVCInput = within(canvasElement).getByTestId('credit-card-cvc-input');
    await userEvent.type(creditCardCVCInput, '345', { delay: 100 });

    await sleep(100);
    const creditCardPasswordInput1 = within(canvasElement).getByTestId('credit-card-password1-input');
    await userEvent.type(creditCardPasswordInput1, '1', { delay: 100 });

    await sleep(100);
    const creditCardPasswordInput2 = within(canvasElement).getByTestId('credit-card-password2-input');
    await userEvent.type(creditCardPasswordInput2, '2', { delay: 100 });

    await sleep(1000);

    const cardRegisterButton = within(canvasElement).getByTestId('credit-card-form-submit');
    await userEvent.click(cardRegisterButton);
  },
  args: {

  },
};
