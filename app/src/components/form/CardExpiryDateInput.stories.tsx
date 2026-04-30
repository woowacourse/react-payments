import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "storybook/test";
import { useState } from "react";

import { CardExpiryDateInputContainer } from "./CardExpiryDateInput";

const meta = {
  title: "CardExpiryDateInputContainer",
  component: CardExpiryDateInputContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardExpiryDateInputContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  cardExpiryDate: {
    "expiry-month": "",
    "expiry-year": "",
  },
  setCardExpiryDate: null,
};

const renderWithState = (args: typeof defaultArgs) => {
  const [cardExpiryDate, setCardExpiryDate] = useState(args.cardExpiryDate);
  return (
    <CardExpiryDateInputContainer
      cardExpiryDate={cardExpiryDate}
      setCardExpiryDate={setCardExpiryDate}
    />
  );
};

export const Base: Story = {
  args: defaultArgs,
  render: renderWithState,
};

export const InvalidMonthInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [monthInput] = canvas.getAllByRole("textbox");
    await userEvent.type(monthInput, "abc");
  },
};

export const InvalidYearInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, yearInput] = canvas.getAllByRole("textbox");
    await userEvent.type(yearInput, "abc");
  },
};
