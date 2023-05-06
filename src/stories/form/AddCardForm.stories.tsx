import { Meta, StoryObj } from '@storybook/react';
import AddCardForm from '../../components/Form/AddCardForm';
import { PageContainer } from 'components/style/PageContainer';
import { CardFormContainer } from 'pages/RegisterCard';
import { GlobalStyle } from 'GlobalStyle';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta = {
  component: AddCardForm,
} satisfies Meta<typeof AddCardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SuccessStory: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <>
          <GlobalStyle />
          <PageContainer>
            <CardFormContainer>
              <Story onSubmit={() => {}} />
            </CardFormContainer>
          </PageContainer>
        </>
      );
    },
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const KBCardButton = document.querySelector('span[id="국민카드"]')!;

    await userEvent.click(KBCardButton);
    expect(canvas.getAllByText('국민카드')).toBeTruthy();

    const submitButton = document.querySelector('button[id="card-submit-btn"]');
    expect(submitButton).toBeDisabled();

    const cardNumber0 = document.querySelector('input[id="card-number0"]')!;
    const cardNumber1 = document.querySelector('input[id="card-number1"]')!;

    await userEvent.click(cardNumber0);

    await userEvent.type(cardNumber0, '5272123412341234', { delay: 100 });
    expect(cardNumber0).toHaveValue('5272');
    expect(cardNumber1).toHaveValue('1234');

    const dateInput = document.querySelector('input[id="month"]')!;

    await userEvent.type(dateInput, '1223', { delay: 100 });
    expect(dateInput).toHaveValue('12');

    const ownerNameInput = document.querySelector('input[id="owner-name"]')!;

    await userEvent.type(ownerNameInput, 'regular park123', { delay: 100 });
    expect(ownerNameInput).toHaveValue('REGULAR PARK');

    const securityCodeInput = document.querySelector('input[id="security-code"]')!;
    await userEvent.type(securityCodeInput, '123', { delay: 100 });

    const passwordInput = document.querySelector('input[id="first-password"]')!;
    await userEvent.type(passwordInput, '12', { delay: 100 });

    expect(submitButton).toBeEnabled();
  },
};

export const FailedWithInvalidYearStory: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <>
          <GlobalStyle />
          <PageContainer>
            <CardFormContainer>
              <Story onSubmit={() => {}} />
            </CardFormContainer>
          </PageContainer>
        </>
      );
    },
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const KBCardButton = document.querySelector('span[id="국민카드"]')!;

    await userEvent.click(KBCardButton);
    expect(canvas.getAllByText('국민카드')).toBeTruthy();

    const submitButton = document.querySelector('button[id="card-submit-btn"]');
    expect(submitButton).toBeDisabled();

    const cardNumber0 = document.querySelector('input[id="card-number0"]')!;
    const cardNumber1 = document.querySelector('input[id="card-number1"]')!;

    await userEvent.click(cardNumber0);

    await userEvent.type(cardNumber0, '5272123412341234', { delay: 100 });
    expect(cardNumber0).toHaveValue('5272');
    expect(cardNumber1).toHaveValue('1234');

    const dateInput = document.querySelector('input[id="month"]')!;

    await userEvent.type(dateInput, '1242', { delay: 100 });
    expect(dateInput).toHaveValue('12');

    const ownerNameInput = document.querySelector('input[id="owner-name"]')!;

    await userEvent.type(ownerNameInput, 'regular park123', { delay: 100 });
    expect(ownerNameInput).toHaveValue('REGULAR PARK');

    const securityCodeInput = document.querySelector('input[id="security-code"]')!;
    await userEvent.type(securityCodeInput, '123', { delay: 100 });

    const passwordInput = document.querySelector('input[id="first-password"]')!;
    await userEvent.type(passwordInput, '12', { delay: 100 });

    expect(submitButton).toBeDisabled();
  },
};
