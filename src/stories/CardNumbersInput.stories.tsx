import type { Meta, StoryObj } from "@storybook/react";
import CardNumbersInput from "../components/CardNumbersInput/CardNumbersInput";
import { useState } from "react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import ERROR from "../constants/errorMessage";
import { CardValidationInfo } from "../constants/CardValidationInfo";

const meta: Meta<typeof CardNumbersInput> = {
  title: "Components/CardNumbersInput",
  component: CardNumbersInput,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CardNumbersInput>;

const Template = () => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(
    Array(CardValidationInfo.TOTAL_CARD_INPUTS).fill("")
  );
  return (
    <CardNumbersInput
      cardNumbers={cardNumbers}
      setCardNumbers={setCardNumbers}
    />
  );
};

export const InvalidCardPrefix: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByPlaceholderText("1234");

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], "60");

    await expect(
      canvas.findByText(ERROR.CARD_NUMBER.INVALID)
    ).resolves.toBeInTheDocument();
  },
};

export const InvalidCard_NonNumeric: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByPlaceholderText("1234");

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], "dkdk");

    await expect(
      canvas.findByText(ERROR.REQUIRE.NUMBER)
    ).resolves.toBeInTheDocument();
  },
};

export const InvalidCard_TooShort_FirstBlock: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByPlaceholderText("1234");

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], "412");

    await expect(
      canvas.findByText(
        `${CardValidationInfo.CARD_MAX_LENGTH}${ERROR.REQUIRE.SPECIFIC_LENGTH}`
      )
    ).resolves.toBeInTheDocument();
  },
};

export const InvalidCard_TooShort_ThirdBlock: Story = {
  render: Template,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inputs = canvas.getAllByPlaceholderText("1234");

    await userEvent.clear(inputs[0]);
    await userEvent.type(inputs[0], "4123");

    await userEvent.clear(inputs[1]);
    await userEvent.type(inputs[1], "5678");

    await userEvent.clear(inputs[2]);
    await userEvent.type(inputs[2], "333");

    await expect(
      canvas.findByText(
        `${CardValidationInfo.CARD_MAX_LENGTH}${ERROR.REQUIRE.SPECIFIC_LENGTH}`
      )
    ).resolves.toBeInTheDocument();
  },
};
