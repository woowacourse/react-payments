import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardContext } from "../../context/CardContext";
import type { NetworkBrand } from "../../context/CardContext";
import { CardPreview } from "./CardPreview";

const meta = {
  title: "CardPreview",
  component: CardPreview,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultCardNumber = ['', '', '', ''];
const defaultCardExpiryDate = { "expiry-month": "", "expiry-year": "" };

const renderWithContext = (
  cardNumber = defaultCardNumber,
  cardExpiryDate = defaultCardExpiryDate,
  networkBrand: NetworkBrand = "",
) =>
  () => (
    <CardContext
      value={{
        cardNumber,
        cardExpiryDate,
        networkBrand,
        setCardNumber: () => {},
        setCardExpiryDate: () => {},
        setNetworkBrand: () => {},
      }}
    >
      <CardPreview />
    </CardContext>
  );

export const Empty: Story = {
  render: renderWithContext(),
};

export const CardNumberPartiallyFilled: Story = {
  render: renderWithContext(['1234', '5678', '', '']),
};

export const CardNumberFullyFilled: Story = {
  render: renderWithContext(['1234', '5678', '9012', '3456']),
};

export const ExpiryDateFilled: Story = {
  render: renderWithContext(defaultCardNumber, {
    "expiry-month": "12",
    "expiry-year": "26",
  }),
};

export const FullyFilled: Story = {
  render: renderWithContext(
    ['1234', '5678', '9012', '3456'],
    { "expiry-month": "12", "expiry-year": "26" },
  ),
};

export const VisaBrand: Story = {
  render: renderWithContext(
    ['4111', '', '', ''],
    defaultCardExpiryDate,
    "visa",
  ),
};

export const MasterBrand: Story = {
  render: renderWithContext(
    ['5111', '', '', ''],
    defaultCardExpiryDate,
    "master",
  ),
};
