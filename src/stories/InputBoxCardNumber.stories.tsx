import type { Meta, StoryObj } from "@storybook/react";

import InputBoxCardNumber from "../component/CardInputPage/InputBoxCardNumber/InputBoxCardNumber";
import { CreditCardProvider } from "../context/CreditCardContext";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

type Story = StoryObj<typeof InputBoxCardNumber>;

const meta: Meta = {
  title: "Card Number Input Box",
  component: InputBoxCardNumber,
  argTypes: {
    setIsComplete: { action: "Is all four inputs complete?" },
  },
  decorators: [
    (Story) => (
      <CreditCardProvider>
        <Story />
      </CreditCardProvider>
    ),
  ],
};

export default meta;

export const Default: Story = {};

export const ErrorMessage: Story = {
  play: async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputBoxes = canvas.getAllByRole("textbox");

    const enterInvalidInput = async (inputElement: HTMLElement) => {
      await userEvent.type(inputElement, "asdf", { delay: 100 });
      expect(await canvas.findByText("카드 번호는 16자리의 숫자입니다.")).toBeVisible();
    };

    const enterValidInput = async (inputElement: HTMLElement) => {
      await userEvent.type(inputElement, "1234", { delay: 100 });
      expect(await canvas.findByText("카드 번호는 16자리의 숫자입니다.")).not.toBeVisible();
    };

    await (enterInvalidInput(inputBoxes[0]));
    userEvent.clear(inputBoxes[0]);
    await (enterValidInput(inputBoxes[0]));

    await (enterInvalidInput(inputBoxes[1]));
    userEvent.clear(inputBoxes[1]);
    await (enterValidInput(inputBoxes[1]));

    await (enterInvalidInput(inputBoxes[2]));
    userEvent.clear(inputBoxes[2]);
    await (enterValidInput(inputBoxes[2]));

    await (enterInvalidInput(inputBoxes[3]));
    userEvent.clear(inputBoxes[3]);
    await (enterValidInput(inputBoxes[3]));
  }
};
