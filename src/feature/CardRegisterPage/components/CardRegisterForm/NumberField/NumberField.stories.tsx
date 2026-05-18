import { useState, type ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";

import NumberField from "./NumberField";
import { CARD, ERROR_MESSAGES } from "../../../constants";

const meta = {
  title: "feature/CardRegister/components/NumberField",
  component: NumberField,
  tags: ["autodocs"],
  args: {
    cardNumbers: ["", "", "", ""],
    onCardNumbersChange: fn(),
    chunkLengths: CARD.DEFAULT.CHUNK_LENGTHS,
    formErrorMessage: null,
    clearFormErrorMessage: fn(),
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
    chunkLengths: CARD.DEFAULT.CHUNK_LENGTHS,
  },
};

export const Filled: Story = {
  args: {
    cardNumbers: ["1234", "5678", "1234", "5678"],
    chunkLengths: CARD.DEFAULT.CHUNK_LENGTHS,
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

    await expect(canvas.getByText(ERROR_MESSAGES.cardNumber)).toBeVisible();
  },
};
