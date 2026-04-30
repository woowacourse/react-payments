import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { useState } from "react";

import { CardNumberInputContainer } from "./CardNumberInput";

const meta = {
  title: "CardNumberInputContainer",
  component: CardNumberInputContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardNumberInputContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  cardNumber: {
    "first-digits": "",
    "second-digits": "",
    "third-digits": "",
    "fourth-digits": "",
  },
  setCardNumber: null,
  setNetworkBrand: null,
};

const renderWithState = (args: typeof defaultArgs) => {
  const [cardNumber, setCardNumber] = useState(args.cardNumber);
  const [, setNetworkBrand] = useState("");
  return (
    <CardNumberInputContainer
      cardNumber={cardNumber}
      setCardNumber={setCardNumber}
      setNetworkBrand={setNetworkBrand}
    />
  );
};

export const base: Story = {
  args: defaultArgs,
  render: renderWithState,
};

export const invalidInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput] = canvas.getAllByRole("textbox");
    await userEvent.type(firstInput, "abc");
    await userEvent.tab();
  },
};

export const invalidCardNumber: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput] = canvas.getAllByRole("textbox");
    await userEvent.type(firstInput, "1");
    await userEvent.tab();
  },
};

export const invalidMastercard: Story = {
  args: defaultArgs,
  render: renderWithState,
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

export const noNetworkBrandValidationOnSecondInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: createNoNetworkBrandValidationPlay(1),
};

export const noNetworkBrandValidationOnThirdInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: createNoNetworkBrandValidationPlay(2),
};

export const noNetworkBrandValidationOnFourthInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: createNoNetworkBrandValidationPlay(3),
};

export const incompleteLengthOnBlur: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, secondInput] = canvas.getAllByRole("textbox");
    await userEvent.type(secondInput, "12");
    await userEvent.tab();
    await expect(
      canvas.getByText("각 항목은 4자리여야 합니다."),
    ).toBeInTheDocument();
  },
};

export const emptyInputOnBlur: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, secondInput] = canvas.getAllByRole("textbox");
    await userEvent.click(secondInput);
    await userEvent.tab();
    await expect(canvas.queryByText("각 항목은 4자리여야 합니다.")).toBeNull();
  },
};

export const completeLengthOnBlur: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [, secondInput] = canvas.getAllByRole("textbox");
    await userEvent.type(secondInput, "1234");
    await userEvent.tab();
    await expect(canvas.queryByText("각 항목은 4자리여야 합니다.")).toBeNull();
  },
};
