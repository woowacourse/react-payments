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
};

const renderWithState = (args: typeof defaultArgs) => {
  const [cardNumber, setCardNumber] = useState(args.cardNumber);
  return (
    <CardNumberInputContainer
      cardNumber={cardNumber}
      setCardNumber={setCardNumber}
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
