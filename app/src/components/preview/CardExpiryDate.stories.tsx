import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardContext } from "../../context/CardContext";
import { CardExpiryDate } from "./CardExpiryDate";

const meta = {
  title: "CardExpiryDate",
  component: CardExpiryDate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardExpiryDate>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultCardNumber = ['', '', '', ''];

const renderWithContext = (cardExpiryDate: {
  "expiry-month": string;
  "expiry-year": string;
}) =>
  () => (
    <CardContext
      value={{
        cardNumber: defaultCardNumber,
        cardExpiryDate,
        setCardNumber: () => {},
        setCardExpiryDate: () => {},
        cardCompany: '',
        setCardCompany: () => {},
        cardCVC: '',
        setCardCVC: () => {},
        cardPassword: '',
        setCardPassword: () => {},
      }}
    >
      <CardExpiryDate />
    </CardContext>
  );

export const Empty: Story = {
  render: renderWithContext({ "expiry-month": "", "expiry-year": "" }),
};

export const MonthPartiallyFilled: Story = {
  render: renderWithContext({ "expiry-month": "1", "expiry-year": "" }),
};

export const MonthFilledWithSlash: Story = {
  render: renderWithContext({ "expiry-month": "12", "expiry-year": "" }),
};

export const FullyFilled: Story = {
  render: renderWithContext({ "expiry-month": "12", "expiry-year": "26" }),
};
