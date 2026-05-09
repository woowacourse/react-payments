import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";
import { useState } from "react";
import { CardContext } from "../../context/CardContext";
import { CardPasswordInput } from "./CardPasswordInput";

const meta = {
  title: "CardPasswordInput",
  component: CardPasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardPasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderWithContext = () => {
  const [cardPassword, setCardPassword] = useState('');
  return (
    <CardContext
      value={{
        cardNumber: ['', '', '', ''],
        setCardNumber: () => {},
        cardExpiryDate: { 'expiry-month': '', 'expiry-year': '' },
        setCardExpiryDate: () => {},
        cardCompany: '',
        setCardCompany: () => {},
        cardCVC: '',
        setCardCVC: () => {},
        cardPassword,
        setCardPassword,
      }}
    >
      <CardPasswordInput />
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

export const InvalidPasswordLength: Story = {
  render: renderWithContext,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "1");
    await userEvent.tab();
    await expect(
      canvas.getByText("비밀번호 앞 2자리를 입력해주세요."),
    ).toBeInTheDocument();
  },
};
