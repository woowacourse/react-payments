import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
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
    await expect(canvas.getByText("숫자만 입력 가능합니다.")).toBeInTheDocument();
  },
};

export const InvalidMonthStartDigit: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [monthInput] = canvas.getAllByRole("textbox");
    await userEvent.type(monthInput, "2");
    await expect(canvas.getByText("유효한 월이 아닙니다.")).toBeInTheDocument();
  },
};

export const InvalidMonthRange: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [monthInput] = canvas.getAllByRole("textbox");
    await userEvent.type(monthInput, "13");
    await expect(canvas.getByText("유효한 월이 아닙니다.")).toBeInTheDocument();
  },
};

export const InvalidYearInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, yearInput] = canvas.getAllByRole("textbox");
    await userEvent.type(yearInput, "abc");
    await expect(canvas.getByText("숫자만 입력 가능합니다.")).toBeInTheDocument();
  },
};

export const InvalidPastYear: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, yearInput] = canvas.getAllByRole("textbox");
    await userEvent.type(yearInput, "24");
    await expect(canvas.getByText("유효한 년도가 아닙니다.")).toBeInTheDocument();
  },
};

export const InvalidMonthLength: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [monthInput] = canvas.getAllByRole("textbox");
    await userEvent.type(monthInput, "1");
    await userEvent.tab();
    await expect(canvas.getByText("각 항목은 2자리여야 합니다.")).toBeInTheDocument();
  },
};

export const InvalidYearLength: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, yearInput] = canvas.getAllByRole("textbox");
    await userEvent.type(yearInput, "2");
    await userEvent.tab();
    await expect(canvas.getByText("각 항목은 2자리여야 합니다.")).toBeInTheDocument();
  },
};
