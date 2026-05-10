import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { useState } from "react";

import { CardExpiryDateInput } from "./CardExpiryDateInput";

const meta = {
  title: "Card/Form/CardExpiryDateInput",
  component: CardExpiryDateInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardExpiryDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  cardExpiryDate: {
    expiryMonth: "",
    expiryYear: "",
  },
  setCardExpiryDate: null,
};

const renderWithState = (args: typeof defaultArgs) => {
  const [cardExpiryDate, setCardExpiryDate] = useState(args.cardExpiryDate);
  return (
    <CardExpiryDateInput
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
    await expect(
      canvas.getByText("숫자만 입력 가능합니다."),
    ).toBeInTheDocument();
  },
};

export const InvalidMonthStartDigit: Story = {
  args: defaultArgs,
  render: renderWithState,
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
  args: defaultArgs,
  render: renderWithState,
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
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, yearInput] = canvas.getAllByRole("textbox");
    await userEvent.type(yearInput, "abc");
    await expect(
      canvas.getByText("숫자만 입력 가능합니다."),
    ).toBeInTheDocument();
  },
};

export const InvalidRangeYear: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, yearInput] = canvas.getAllByRole("textbox");
    await userEvent.type(yearInput, "25");
    await expect(
      canvas.getByText("유효하지 않은 연도입니다."),
    ).toBeInTheDocument();
    await userEvent.clear(yearInput);
    await userEvent.type(yearInput, "32");
    await expect(
      canvas.getByText("유효하지 않은 연도입니다."),
    ).toBeInTheDocument();
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
    await expect(
      canvas.getByText("날짜 각 항목은 2자리여야 합니다."),
    ).toBeInTheDocument();
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
    await expect(
      canvas.getByText("날짜 각 항목은 2자리여야 합니다."),
    ).toBeInTheDocument();
  },
};

export const MultipleErrorsInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [monthInput, yearInput] = canvas.getAllByRole("textbox");
    await userEvent.type(yearInput, "00");
    await userEvent.type(monthInput, "7");
    await expect(
      canvas.queryByText(
        "유효하지 않은 날짜 형식입니다. 0 이나 1로 시작해야 합니다.",
      ),
    ).toBeInTheDocument();
    await expect(
      canvas.queryByText("날짜 각 항목은 2자리여야 합니다."),
    ).toBeInTheDocument();
  },
};

export const InputAutoFocusNextOrPreviousInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput, secondInput] = canvas.getAllByRole("textbox");
    await userEvent.type(firstInput, "12");
    await expect(secondInput).toHaveFocus();

    await userEvent.type(secondInput, "30");
    await userEvent.clear(secondInput);

    await expect(firstInput).toHaveFocus();
  },
};
