import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardContext } from "../../context/CardContext";
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
) =>
  () => (
    <CardContext
      value={{
        cardNumber,
        cardExpiryDate,
        setCardNumber: () => {},
        setCardExpiryDate: () => {},
        cardCompany: '',
        setCardCompany: () => {},
        cardCVC: '',
        setCardCVC: () => {},
        cardPassword: '',
        setCardPassword: () => {},
        networkBrand: '',
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
  render: renderWithContext(['4111', '', '', '']),
};

export const MasterBrand: Story = {
  render: renderWithContext(['5111', '', '', '']),
};

export const DinersBrand: Story = {
  render: renderWithContext(['3600', '', '', '']),
};

export const AmexBrand: Story = {
  render: renderWithContext(['3400', '', '', '']),
};

export const UnionPayBrand: Story = {
  render: renderWithContext(['6221', '26', '', '']),
};
