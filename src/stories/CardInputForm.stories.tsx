import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from '@storybook/testing-library';
import CardInputForm from "../component/CardInputPage/CardInputForm/CardInputForm";
import { BrowserRouter } from "react-router-dom";
import { CreditCardProvider } from "../context/CreditCardContext";

type Story = StoryObj<typeof CardInputForm>;

const meta: Meta  = {
  title: "Card Input Form",
  component: CardInputForm,

  argTypes: {
    addNewCard: {
      action: "카드 입력 성공!"
    }
  },

  decorators: [
    (Story) => (
      <BrowserRouter>
        <CreditCardProvider>
          <Story />
        </CreditCardProvider>
      </BrowserRouter>
    ),
  ],
};

export default meta;

const waitAfterType = async (target: Element, content: string, delay: number) => {
  await userEvent.type(target, content, { delay });
  await new Promise((resolve) => setTimeout(resolve, delay));
};

export const Form: Story = {};

export const FormInputSuccess: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.keyboard(' {esc}', { delay: 500 });

    const cardNumberInput1 = canvas.getByTestId('card-number-1');
    const cardNumberInput2 = canvas.getByTestId('card-number-2');
    const cardNumberInput3 = canvas.getByTestId('card-number-3');
    const cardNumberInput4 = canvas.getByTestId('card-number-4');

    await waitAfterType(cardNumberInput1, '1234', 100);
    await waitAfterType(cardNumberInput2, '4567', 100);
    await waitAfterType(cardNumberInput3, '3546', 100);
    await waitAfterType(cardNumberInput4, '2345', 100);

    const dateInput = canvas.getByTestId('expiration-date');

    await waitAfterType(dateInput, '0124', 100);

    const nameInput = canvas.getByTestId('card-owner');

    await waitAfterType(nameInput, 'WOOWA', 100);

    const securityCodeInput = canvas.getByTestId('security-code');

    await waitAfterType(securityCodeInput, '234', 100);

    const passwordInput1 = canvas.getByTestId('card-password-1');
    const passwordInput2 = canvas.getByTestId('card-password-2');

    await waitAfterType(passwordInput1, '2', 100);
    await waitAfterType(passwordInput2, '2', 100);

    const submitButton = canvas.getByTestId('submit-button');

    userEvent.click(submitButton);
  },
};
