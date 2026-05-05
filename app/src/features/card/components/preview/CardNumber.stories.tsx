import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardContext } from "../Card";
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
        cardExpiryDate: defaultCardExpiryDate,
        setCardNumber: () => {},
        setCardExpiryDate: () => {},
      }}
    >
      <CardNumber />
    </CardContext>
  );

export const Empty: Story = {
  render: renderWithContext({
    "first-digits": "",
    "second-digits": "",
    "third-digits": "",
    "fourth-digits": "",
  }),
};

export const FirstGroupFilled: Story = {
  render: renderWithContext({
    "first-digits": "1234",
    "second-digits": "",
    "third-digits": "",
    "fourth-digits": "",
  }),
};

export const SecondGroupFilled: Story = {
  render: renderWithContext({
    "first-digits": "1234",
    "second-digits": "5678",
    "third-digits": "",
    "fourth-digits": "",
  }),
};

export const ThirdGroupMasked: Story = {
  render: renderWithContext({
    "first-digits": "1234",
    "second-digits": "5678",
    "third-digits": "9012",
    "fourth-digits": "",
  }),
};

export const FullyFilledAndMasked: Story = {
  render: renderWithContext({
    "first-digits": "1234",
    "second-digits": "5678",
    "third-digits": "9012",
    "fourth-digits": "3456",
  }),
};
