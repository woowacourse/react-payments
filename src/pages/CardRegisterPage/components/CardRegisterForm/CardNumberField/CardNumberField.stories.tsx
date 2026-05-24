import { useState, type ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";

import NumberField from "./CardNumberField";
import { CARD_BRAND } from "../../../../../domain/card/cardBrand";
import { ERROR_MESSAGES } from "./constants";

const meta = {
  title: "feature/CardRegister/components/NumberField",
  component: NumberField,
  tags: ["autodocs"],
  args: {
    cardNumbers: ["", "", "", ""],
    onCardNumbersChange: fn(),
    cardNumberEachChunkLength: CARD_BRAND.DEFAULT.CHUNK_LENGTHS,
    formErrorMessage: null,
    clearFormErrorMessage: fn(),
    disabledInput: false,
  },
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;
type NumberFieldProps = ComponentProps<typeof NumberField>;

const StatefulNumberField = (args: NumberFieldProps) => {
  const [cardNumbers, setCardNumbers] = useState(args.cardNumbers);

  return (
    <NumberField
      {...args}
      cardNumbers={cardNumbers}
      onCardNumbersChange={setCardNumbers}
    />
  );
};

export const Empty: Story = {};

export const Partial: Story = {
  args: {
    cardNumbers: ["1234", "56", "", ""],
    cardNumberEachChunkLength: CARD_BRAND.DEFAULT.CHUNK_LENGTHS,
  },
};

export const Filled: Story = {
  args: {
    cardNumbers: ["1234", "5678", "1234", "5678"],
    cardNumberEachChunkLength: CARD_BRAND.DEFAULT.CHUNK_LENGTHS,
  },
};

export const Interactive: Story = {
  render: StatefulNumberField,
};

export const ErrorAfterBlur: Story = {
  render: StatefulNumberField,
  parameters: {
    docs: {
      disable: true,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput] = canvas.getAllByPlaceholderText("1234");

    await userEvent.type(firstInput, "12");
    await userEvent.tab();

    await expect(
      canvas.getByText(ERROR_MESSAGES.INVALID_INPUT_LENGTH),
    ).toBeVisible();
  },
};
