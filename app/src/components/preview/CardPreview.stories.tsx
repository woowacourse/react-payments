import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardContext } from "../Card";
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

const defaultCardNumber = {
  "first-digits": "",
  "second-digits": "",
  "third-digits": "",
  "fourth-digits": "",
};
const defaultCardExpiryDate = { "expiry-month": "", "expiry-year": "" };

const renderWithContext = (
  cardNumber = defaultCardNumber,
  cardExpiryDate = defaultCardExpiryDate,
  networkBrand = "",
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
  render: renderWithContext({
    "first-digits": "1234",
    "second-digits": "5678",
    "third-digits": "",
    "fourth-digits": "",
  }),
};

export const CardNumberFullyFilled: Story = {
  render: renderWithContext({
    "first-digits": "1234",
    "second-digits": "5678",
    "third-digits": "9012",
    "fourth-digits": "3456",
  }),
};

export const ExpiryDateFilled: Story = {
  render: renderWithContext(defaultCardNumber, {
    "expiry-month": "12",
    "expiry-year": "26",
  }),
};

export const FullyFilled: Story = {
  render: renderWithContext(
    {
      "first-digits": "1234",
      "second-digits": "5678",
      "third-digits": "9012",
      "fourth-digits": "3456",
    },
    { "expiry-month": "12", "expiry-year": "26" },
  ),
};

export const VisaBrand: Story = {
  render: renderWithContext(
    { "first-digits": "4111", "second-digits": "", "third-digits": "", "fourth-digits": "" },
    defaultCardExpiryDate,
    "visa",
  ),
};

export const MasterBrand: Story = {
  render: renderWithContext(
    { "first-digits": "5111", "second-digits": "", "third-digits": "", "fourth-digits": "" },
    defaultCardExpiryDate,
    "master",
  ),
};
