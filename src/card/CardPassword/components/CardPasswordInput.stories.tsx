import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, expect } from "@storybook/test";
import CardPasswordInput from "./CardPasswordInput";
import useControlledCardPassword from "../hooks/useControlledCardPassword";
import { CARD_PASSWORD_ERROR_MESSAGE } from "../constants";

const meta = {
  title: "Card/CardPasswordInput",
  component: CardPasswordInput,
  args: {
    cardPasswordState: { value: "", errorMessage: "" },
    handleCardPasswordChange: () => {},
  },
} satisfies Meta<typeof CardPasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValidationTest: Story = {
  render: () => {
    const { cardPasswordState, handleCardPasswordChange } =
      useControlledCardPassword();

    return (
      <CardPasswordInput
        cardPasswordState={cardPasswordState}
        handleCardPasswordChange={handleCardPasswordChange}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const passwordInput = canvasElement.querySelector(
      'input[role="card-password-input"]'
    ) as HTMLInputElement;
    await userEvent.type(passwordInput, "1");

    const errorMessage = canvasElement.querySelector(
      "#error-message"
    ) as HTMLSpanElement;
    expect(errorMessage.textContent).toBe(CARD_PASSWORD_ERROR_MESSAGE.LENGTH);
  },
};
