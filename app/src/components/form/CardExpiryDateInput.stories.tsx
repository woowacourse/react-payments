import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { useState } from "react";
import { CardContext } from "../Card";

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

const renderWithContext = () => {
  const [cardExpiryDate, setCardExpiryDate] = useState({
    "expiry-month": "",
    "expiry-year": "",
  });
  return (
    <CardContext
      value={{
        cardNumber: {
          "first-digits": "",
          "second-digits": "",
          "third-digits": "",
          "fourth-digits": "",
        },
        setCardNumber: () => {},
        networkBrand: "",
        setNetworkBrand: () => {},
        cardExpiryDate,
        setCardExpiryDate,
      }}
    >
      <CardExpiryDateInputContainer />
    </CardContext>
  );
};

export const Base: Story = {
  render: renderWithContext,
};

export const InvalidMonthInput: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [monthInput] = canvas.getAllByRole("textbox");
    await userEvent.type(monthInput, "abc");
    await expect(canvas.getByText("숫자만 입력 가능합니다.")).toBeInTheDocument();
  },
};

export const InvalidMonthStartDigit: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [monthInput] = canvas.getAllByRole("textbox");
    await userEvent.type(monthInput, "2");
    await expect(canvas.getByText("유효한 월이 아닙니다.")).toBeInTheDocument();
  },
};

export const InvalidMonthRange: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [monthInput] = canvas.getAllByRole("textbox");
    await userEvent.type(monthInput, "13");
    await expect(canvas.getByText("유효한 월이 아닙니다.")).toBeInTheDocument();
  },
};

export const InvalidYearInput: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, yearInput] = canvas.getAllByRole("textbox");
    await userEvent.type(yearInput, "abc");
    await expect(canvas.getByText("숫자만 입력 가능합니다.")).toBeInTheDocument();
  },
};

export const InvalidPastYear: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, yearInput] = canvas.getAllByRole("textbox");
    await userEvent.type(yearInput, "24");
    await expect(canvas.getByText("유효한 년도가 아닙니다.")).toBeInTheDocument();
  },
};

export const InvalidMonthLength: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [monthInput] = canvas.getAllByRole("textbox");
    await userEvent.type(monthInput, "1");
    await userEvent.tab();
    await expect(canvas.getByText("각 항목은 2자리여야 합니다.")).toBeInTheDocument();
  },
};

export const InvalidYearLength: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, yearInput] = canvas.getAllByRole("textbox");
    await userEvent.type(yearInput, "2");
    await userEvent.tab();
    await expect(canvas.getByText("각 항목은 2자리여야 합니다.")).toBeInTheDocument();
  },
};
