import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardContext } from "../../context/CardContext";
import { CardNumber } from "./CardNumber";

const meta = {
  title: "CardNumber",
  component: CardNumber,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultCardExpiryDate = { "expiry-month": "", "expiry-year": "" };

const renderWithContext = (cardNumber: string[]) =>
  () => (
    <CardContext
      value={{
        cardNumber,
        cardExpiryDate: defaultCardExpiryDate,
        networkBrand: "",
        setCardNumber: () => {},
        setCardExpiryDate: () => {},
        setNetworkBrand: () => {},
      }}
    >
      <CardNumber />
    </CardContext>
  );

export const Empty: Story = {
  render: renderWithContext(['', '', '', '']),
};

export const FirstGroupFilled: Story = {
  render: renderWithContext(['1234', '', '', '']),
};

export const SecondGroupFilled: Story = {
  render: renderWithContext(['1234', '5678', '', '']),
};

export const ThirdGroupMasked: Story = {
  render: renderWithContext(['1234', '5678', '9012', '']),
};

export const FullyFilledAndMasked: Story = {
  render: renderWithContext(['1234', '5678', '9012', '3456']),
};
