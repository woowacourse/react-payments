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
  progress: {
    cardNumber: true,
    cardBrand: false,
    cardExpiryDate: false,
    cardCVCNumber: false,
    cardPassword: false,
  },
  setProgress: null,
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

const createNetworkBrandValidationPlay =
  (inputIndex: number): Story["play"] =>
  async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getAllByRole("textbox")[inputIndex];
    await userEvent.type(input, "4");
    await userEvent.tab();
    await expect(
      canvas.queryByText("존재하지 않는 네트워크 브랜드 입니다."),
    ).toBeInTheDocument();
  };

export const NetworkBrandValidationOnSecondInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: createNetworkBrandValidationPlay(1),
};

export const NetworkBrandValidationOnThirdInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: createNetworkBrandValidationPlay(2),
};

export const NetworkBrandValidationOnFourthInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: createNetworkBrandValidationPlay(3),
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
      canvas.queryByText("존재하지 않는 네트워크 브랜드 입니다."),
    ).toBeInTheDocument();
    await expect(
      canvas.queryByText("카드 번호 각 항목은 4자리여야 합니다."),
    ).toBeInTheDocument();
  },
};

export const BlankInputExcludeCheckNetworkBrand: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const firstDigitsInput = canvasElement.querySelector("#first-digits");
    await userEvent.type(firstDigitsInput, "1");
    await expect(
      canvas.queryByText("존재하지 않는 네트워크 브랜드 입니다."),
    ).toBeInTheDocument();
    await userEvent.clear(firstDigitsInput);
    await expect(
      canvas.queryByText("존재하지 않는 네트워크 브랜드 입니다."),
    ).toBeNull();
  },
};

export const InputAutoFocusNextOrPreviousInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput, secondInput] = canvas.getAllByRole("textbox");
    await userEvent.type(firstInput, "1234");
    await expect(secondInput).toHaveFocus();

    await userEvent.type(secondInput, "12");
    await userEvent.clear(secondInput);

    await expect(firstInput).toHaveFocus();
  },
};
