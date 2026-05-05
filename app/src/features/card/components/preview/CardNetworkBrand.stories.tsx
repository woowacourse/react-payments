import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardContext } from "../Card";

import { CardNetworkBrand } from "./CardNetworkBrand";

const meta = {
  title: "Card/Preview/CardNetworkBrand",
  component: CardNetworkBrand,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardNetworkBrand>;

export default meta;
type Story = StoryObj<typeof meta>;

const renderWithContext =
  (cardNumber: {
    "first-digits": string;
    "second-digits": string;
    "third-digits": string;
    "fourth-digits": string;
  }) =>
  () => (
    <CardContext
      value={{
        cardNumber,
        setCardNumber: () => {},
        cardExpiryDate: { "expiry-month": "", "expiry-year": "" },
        setCardExpiryDate: () => {},
      }}
    >
      <CardNetworkBrand />
    </CardContext>
  );

export const Master: Story = {
  render: renderWithContext({
    "first-digits": "54",
    "second-digits": "",
    "third-digits": "",
    "fourth-digits": "",
  }),
};

export const Visa: Story = {
  render: renderWithContext({
    "first-digits": "4",
    "second-digits": "",
    "third-digits": "",
    "fourth-digits": "",
  }),
};

export const Unknown: Story = {
  render: renderWithContext({
    "first-digits": "",
    "second-digits": "",
    "third-digits": "",
    "fourth-digits": "",
  }),
};
