import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { useState } from "react";
import { CardContext } from "../CardContext";

import { CardNumberInput } from "./CardNumberInput";

const meta = {
  title: "Card/Form/CardNumberInput",
  component: CardNumberInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderWithContext = () => {
  const [cardNumber, setCardNumber] = useState({
    "first-digits": "",
    "second-digits": "",
    "third-digits": "",
    "fourth-digits": "",
  });
  return (
    <CardContext
      value={{
        cardNumber,
        setCardNumber,
        cardExpiryDate: { "expiry-month": "", "expiry-year": "" },
        setCardExpiryDate: () => {},
      }}
    >
      <CardNumberInput />
    </CardContext>
  );
};

export const Base: Story = {
  render: renderWithContext,
};

export const InvalidInput: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput] = canvas.getAllByRole("textbox");
    await userEvent.type(firstInput, "abc");
    await userEvent.tab();
  },
};

export const InvalidCardNumber: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput] = canvas.getAllByRole("textbox");
    await userEvent.type(firstInput, "1");
    await userEvent.tab();
  },
};

export const InvalidMastercard: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput] = canvas.getAllByRole("textbox");
    await userEvent.type(firstInput, "56");
    await userEvent.tab();
  },
};

const createNoNetworkBrandValidationPlay =
  (inputIndex: number): Story["play"] =>
  async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getAllByRole("textbox")[inputIndex];
    await userEvent.type(input, "1");
    await userEvent.tab();
    await expect(canvas.queryByText("유요한 카드 번호가 아닙니다.")).toBeNull();
    await expect(
      canvas.queryByText("유요한 마스터카드 번호가 아닙니다."),
    ).toBeNull();
  };

export const NoNetworkBrandValidationOnSecondInput: Story = {
  render: renderWithContext,
  play: createNoNetworkBrandValidationPlay(1),
};

export const NoNetworkBrandValidationOnThirdInput: Story = {
  render: renderWithContext,
  play: createNoNetworkBrandValidationPlay(2),
};

export const NoNetworkBrandValidationOnFourthInput: Story = {
  render: renderWithContext,
  play: createNoNetworkBrandValidationPlay(3),
};

export const IncompleteLengthOnBlur: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, secondInput] = canvas.getAllByRole("textbox");
    await userEvent.type(secondInput, "12");
    await userEvent.tab();
    await expect(
      canvas.getByText("카드 번호 각 항목은 4자리여야 합니다."),
    ).toBeInTheDocument();
  },
};

export const EmptyInputOnBlur: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, secondInput] = canvas.getAllByRole("textbox");
    await userEvent.click(secondInput);
    await userEvent.tab();
    await expect(
      canvas.queryByText("카드 번호 각 항목은 4자리여야 합니다."),
    ).toBeNull();
  },
};

export const CompleteLengthOnBlur: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, secondInput] = canvas.getAllByRole("textbox");
    await userEvent.type(secondInput, "1234");
    await userEvent.tab();
    await expect(
      canvas.queryByText("카드 번호 각 항목은 4자리여야 합니다."),
    ).toBeNull();
  },
};

export const PerserveErrorMessageInput: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, secondInput, thirdInput, fourthInput] =
      canvas.getAllByRole("textbox");
    await userEvent.type(secondInput, "12");
    await userEvent.type(thirdInput, "34");
    await userEvent.type(fourthInput, "1");
    await expect(
      canvas.queryByText("카드 번호 각 항목은 4자리여야 합니다."),
    ).toBeInTheDocument();
  },
};

export const MultipleErrorsInput: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput, secondInput] = canvas.getAllByRole("textbox");
    await userEvent.type(secondInput, "12");
    await userEvent.type(firstInput, "7");
    await expect(
      canvas.queryByText(
        "유효한 카드 번호가 아닙니다. 카드 번호는 4 또는 5로 시작해야합니다.",
      ),
    ).toBeInTheDocument();
    await expect(
      canvas.queryByText("카드 번호 각 항목은 4자리여야 합니다."),
    ).toBeInTheDocument();
  },
};
