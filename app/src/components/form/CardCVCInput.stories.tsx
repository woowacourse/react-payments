import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { useState, useRef } from "react";
import { CardContext } from "../../context/CardContext";
import { CardCVCInput } from "./CardCVCInput";

const meta = {
  title: "CardCVCInput",
  component: CardCVCInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardCVCInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderWithContext = () => {
  const [cardCVC, setCardCVC] = useState('');
  const cardCVCRef = useRef<HTMLInputElement>(null);
  return (
    <CardContext
      value={{
        cardNumber: ['', '', '', ''],
        setCardNumber: () => {},
        cardExpiryDate: { 'expiry-month': '', 'expiry-year': '' },
        setCardExpiryDate: () => {},
        cardCompany: '',
        setCardCompany: () => {},
        cardPassword: '',
        setCardPassword: () => {},
        cardCVC,
        setCardCVC,
      }}
    >
      <CardCVCInput cardCVCRef={cardCVCRef} onComplete={() => {}} />
    </CardContext>
  );
};

export const Base: Story = {
  render: renderWithContext,
};

export const InvalidTypeInput: Story = {
  render: renderWithContext,
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
  render: renderWithContext,
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
