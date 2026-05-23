import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn, userEvent, within, expect } from "storybook/test";
import { useState } from "react";
import { CardForm } from "./CardForm";
import { withCardRouter } from "../storybook/decorators";
import { ExpiryDate } from "../../ExpiryDate";

const meta = {
  title: "Card/Form/CardForm",
  component: CardForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [withCardRouter],
} satisfies Meta<typeof CardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  cardNumber: {
    firstDigits: "",
    secondDigits: "",
    thirdDigits: "",
    fourthDigits: "",
  },
  setCardNumber: () => {},
  cardExpiryDate: new ExpiryDate("", ""),
  setCardExpiryDate: () => {},
  cardBrand: null as string | null,
  setCardBrand: () => {},
  cardCVC: "",
  setCardCVC: () => {},
  cardPassword: "",
  setCardPassword: () => {},
  gotoCreateCardDonePage: () => {},
};

const renderWithState: NonNullable<Story["render"]> = (args) => {
  const [cardNumber, setCardNumber] = useState(args.cardNumber);
  const [cardExpiryDate, setCardExpiryDate] = useState(args.cardExpiryDate);
  const [cardBrand, setCardBrand] = useState(args.cardBrand);
  const [cardCVC, setCardCVC] = useState(args.cardCVC);
  const [cardPassword, setCardPassword] = useState(args.cardPassword);

  return (
    <CardForm
      cardNumber={cardNumber}
      setCardNumber={setCardNumber}
      cardExpiryDate={cardExpiryDate}
      setCardExpiryDate={setCardExpiryDate}
      cardBrand={cardBrand}
      setCardBrand={setCardBrand}
      cardCVC={cardCVC}
      setCardCVC={setCardCVC}
      cardPassword={cardPassword}
      setCardPassword={setCardPassword}
      gotoCreateCardDonePage={args.gotoCreateCardDonePage}
    />
  );
};

export const BaseCardForm: Story = {
  args: { ...defaultArgs },
  render: renderWithState,
};

const completeArgs = {
  ...defaultArgs,
  cardNumber: {
    firstDigits: "4321",
    secondDigits: "4321",
    thirdDigits: "4321",
    fourthDigits: "4321",
  },
  cardExpiryDate: new ExpiryDate("01", "28"),
  cardBrand: "kakao",
  cardCVC: "111",
  cardPassword: "12",
};

export const CompleteCardForm: Story = {
  args: completeArgs,
  render: renderWithState,
};

export const NetworkErrorOnSubmit: Story = {
  args: completeArgs,
  render: renderWithState,
  beforeEach() {
    const original = globalThis.fetch;
    globalThis.fetch = fn().mockRejectedValue(new TypeError("Failed to fetch"));
    return () => {
      globalThis.fetch = original;
    };
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "확인" }));
    await expect(
      canvas.getByText(
        "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
      ),
    ).toBeInTheDocument();
  },
};

export const ServerErrorOnSubmit: Story = {
  args: completeArgs,
  render: renderWithState,
  beforeEach() {
    const original = globalThis.fetch;
    globalThis.fetch = fn().mockResolvedValue(
      new Response(
        JSON.stringify({ errorMessages: ["서버 오류가 발생했습니다."] }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      ),
    );
    return () => {
      globalThis.fetch = original;
    };
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: "확인" }));
    await expect(
      canvas.getByText("카드 등록에 실패했어요. 입력 정보를 확인해 주세요."),
    ).toBeInTheDocument();
  },
};
