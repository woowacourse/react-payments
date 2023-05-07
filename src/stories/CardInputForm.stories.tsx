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
    const inputBoxes = canvas.getAllByRole('textbox');

    await userEvent.keyboard(' {esc}', { delay: 500 });

    const cardNumberInput1 = inputBoxes[0];
    const cardNumberInput2 = inputBoxes[1];
    const cardNumberInput3 = inputBoxes[2];
    const cardNumberInput4 = inputBoxes[3];

    await waitAfterType(cardNumberInput1, '1234', 100);
    await waitAfterType(cardNumberInput2, '4567', 100);
    await waitAfterType(cardNumberInput3, '3546', 100);
    await waitAfterType(cardNumberInput4, '2345', 100);

    const dateInput = inputBoxes[4];

    await waitAfterType(dateInput, '0124', 100);

    const nameInput = inputBoxes[5];

    await waitAfterType(nameInput, 'WOOWA', 100);

    const securityCodeInput = inputBoxes[6];

    await waitAfterType(securityCodeInput, '234', 100);

    const passwordInput1 = inputBoxes[7];
    const passwordInput2 = inputBoxes[8];

    await waitAfterType(passwordInput1, '2', 100);
    await waitAfterType(passwordInput2, '2', 100);

    const submitButton = canvas.getByRole('button', { name: '다음' });

    userEvent.click(submitButton);
  },
};
