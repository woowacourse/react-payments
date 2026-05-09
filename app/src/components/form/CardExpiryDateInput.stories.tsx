import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { useState, useRef } from "react";
import { CardContext } from "../../context/CardContext";

import { CardExpiryDateInput } from "./CardExpiryDateInput";

const meta = {
  title: "CardExpiryDateInput",
  component: CardExpiryDateInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardExpiryDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderWithContext = () => {
  const [cardExpiryDate, setCardExpiryDate] = useState({
    "expiry-month": "",
    "expiry-year": "",
  });
  const firstRef = useRef<HTMLInputElement>(null);
  return (
    <CardContext
      value={{
        cardNumber: ['', '', '', ''],
        setCardNumber: () => {},
        cardCompany: '',
        setCardCompany: () => {},
        cardCVC: '',
        setCardCVC: () => {},
        cardPassword: '',
        setCardPassword: () => {},
        cardExpiryDate,
        setCardExpiryDate,
      }}
    >
      <CardExpiryDateInput firstRef={firstRef} onComplete={() => {}} />
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
    await expect(
      canvas.getByText("숫자만 입력 가능합니다."),
    ).toBeInTheDocument();
  },
};

export const InvalidMonthStartDigit: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [monthInput] = canvas.getAllByRole("textbox");
    await userEvent.type(monthInput, "2");
    await expect(
      canvas.getByText(
        "유효하지 않은 날짜 형식입니다. 0 이나 1로 시작해야 합니다.",
      ),
    ).toBeInTheDocument();
  },
};

export const InvalidMonthRange: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [monthInput] = canvas.getAllByRole("textbox");
    await userEvent.type(monthInput, "13");
    await expect(
      canvas.getByText(
        "유효하지 않은 날짜 형식입니다. 1 ~ 12 이내 숫자여야 합니다.",
      ),
    ).toBeInTheDocument();
  },
};

export const InvalidYearInput: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, yearInput] = canvas.getAllByRole("textbox");
    await userEvent.type(yearInput, "abc");
    await expect(
      canvas.getByText("숫자만 입력 가능합니다."),
    ).toBeInTheDocument();
  },
};

export const InvalidPastYear: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, yearInput] = canvas.getAllByRole("textbox");
    await userEvent.type(yearInput, "24");
    await expect(
      canvas.getByText("유효기간이 만료된 연도입니다."),
    ).toBeInTheDocument();
  },
};

export const InvalidMonthLength: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [monthInput] = canvas.getAllByRole("textbox");
    await userEvent.type(monthInput, "1");
    await userEvent.tab();
    await expect(
      canvas.getByText("날짜 각 항목은 2자리여야 합니다."),
    ).toBeInTheDocument();
  },
};

export const InvalidYearLength: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, yearInput] = canvas.getAllByRole("textbox");
    await userEvent.type(yearInput, "2");
    await userEvent.tab();
    await expect(
      canvas.getByText("날짜 각 항목은 2자리여야 합니다."),
    ).toBeInTheDocument();
  },
};
