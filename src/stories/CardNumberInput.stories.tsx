import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CardNumberInput from "../pages/add-card/payment-input/components/cardInputForm/cardNumberInput/CardNumberInput";
import { userEvent, expect, within } from "@storybook/test";
import styles from "../components/common/inputField/input/Input.module.css";

const meta = {
  title: "Components/CardNumberInput",
  component: CardNumberInput,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    handleCardNumbersChange: (cardNumbers) => {},
    onSuccessValidate: (isValid) => {},
    onSuccessNextInput: () => {},
  },
  render: () => {
    const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);

    function handleCardNumbersChange(newNumbers: string[]) {
      setCardNumbers(newNumbers);
    }

    function onSuccessValidate(isValid: boolean) {
      console.log("Valid:", isValid);
    }

    function onSuccessNextInput() {
      console.log("Next input activated");
    }

    return (
      <CardNumberInput
        handleCardNumbersChange={handleCardNumbersChange}
        onSuccessValidate={onSuccessValidate}
        onSuccessNextInput={onSuccessNextInput}
      />
    );
  },
};

export const Error: Story = {
  args: {
    handleCardNumbersChange: (cardNumbers) => {},
    onSuccessValidate: (isValid) => {},
    onSuccessNextInput: () => {},
  },
  render: Default.render,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstInput = canvas.getAllByPlaceholderText("1234")[0];

    await userEvent.type(firstInput, "abcd");
    expect(firstInput.className).toContain(styles.isNotValid);

    expect(canvas.getByText("숫자를 입력해주세요")).toBeVisible();
  },
};
