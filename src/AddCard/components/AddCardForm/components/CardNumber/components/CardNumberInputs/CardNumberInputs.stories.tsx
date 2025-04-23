import type { Meta, StoryObj } from "@storybook/react";
import CardNumberInputs from "./CardNumberInputs";
import { INITIAL_CARD_NUMBER_STATE } from "../../constants";
import useControlledCardNumber from "../../hooks/useControlledCardNumber";
import { userEvent, expect } from "@storybook/test";

const meta = {
  title: "Component/AddCard/CardNumberInputs",
  component: CardNumberInputs,
  args: {
    cardNumberState: INITIAL_CARD_NUMBER_STATE,
    handleCardNumberChange: () => {},
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardNumberInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    cardNumberState: {
      ...INITIAL_CARD_NUMBER_STATE,
      first: { value: "123", errorMessage: "4자리의 숫자만 입력 가능합니다." },
    },
  },
};

export const WithValidationTest: Story = {
  render: () => {
    const { cardNumberState, handleCardNumberChange } =
      useControlledCardNumber();

    return (
      <CardNumberInputs
        cardNumberState={cardNumberState}
        handleCardNumberChange={handleCardNumberChange}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const firstInputElement = canvasElement.querySelector(
      "#card-number-first-input"
    ) as HTMLInputElement;
    await userEvent.type(firstInputElement, "321");
    expect(firstInputElement.value).toBe("321");

    const errorMessageEl = canvasElement.querySelector(
      "#card-number-error-message"
    ) as HTMLParagraphElement;
    expect(errorMessageEl.textContent).toBe("4자리의 숫자만 입력 가능합니다.");
    const secondInputElement = canvasElement.querySelector(
      "#card-number-second-input"
    ) as HTMLInputElement;
    await userEvent.type(secondInputElement, "aaaa");
    expect(secondInputElement.value).toBe("");

    expect(errorMessageEl.textContent).toBe("숫자만 입력 가능합니다.");
  },
};
