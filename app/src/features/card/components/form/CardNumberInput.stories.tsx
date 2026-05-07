import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { useState } from "react";

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
    <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
  );
};

export const Base: Story = {
  args: defaultArgs,
  render: renderWithState,
};

export const InvalidInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput] = canvas.getAllByRole("textbox");
    await userEvent.type(firstInput, "abc");
    await userEvent.tab();
  },
};

export const InvalidNetworkBrandCardNumber: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput] = canvas.getAllByRole("textbox");
    await userEvent.type(firstInput, "1");
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
  args: defaultArgs,
  render: renderWithState,
  play: createNoNetworkBrandValidationPlay(1),
};

export const NoNetworkBrandValidationOnThirdInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: createNoNetworkBrandValidationPlay(2),
};

export const NoNetworkBrandValidationOnFourthInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: createNoNetworkBrandValidationPlay(3),
};

export const IncompleteLengthOnBlur: Story = {
  args: defaultArgs,
  render: renderWithState,
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
  args: defaultArgs,
  render: renderWithState,
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
  args: defaultArgs,
  render: renderWithState,
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
  args: defaultArgs,
  render: renderWithState,
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
  args: defaultArgs,
  render: renderWithState,
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
