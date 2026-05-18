import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";

import { CardCVCInput } from "./CardCVCInput";
import { useState } from "react";

const meta = {
  title: "Card/Form/CardCVCInput",
  component: CardCVCInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardCVCInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  cardCVC: "",
  setCardCVC: () => {},
  formErrorCodes: [],
};

const renderWithState: NonNullable<Story["render"]> = (args) => {
  const [cardCVC, setCardCVC] = useState(args.cardCVC);
  return (
    <CardCVCInput
      cardCVC={cardCVC}
      setCardCVC={setCardCVC}
      formErrorCodes={args.formErrorCodes}
    />
  );
};

export const Base: Story = {
  args: defaultArgs,
  render: renderWithState,
};

export const WithFormError: Story = {
  args: { ...defaultArgs, formErrorCodes: ["INVALID_CVC"] },
  render: renderWithState,
};

export const InvalidTypeInput: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "abc");
    await expect(
      canvas.getByText("숫자만 입력 가능합니다."),
    ).toBeInTheDocument();
  },
};

export const InvalidCVCLength: Story = {
  args: defaultArgs,
  render: renderWithState,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "12");
    await userEvent.tab();
    await expect(
      canvas.getByText("CVC는 3자리여야 합니다."),
    ).toBeInTheDocument();
  },
};
