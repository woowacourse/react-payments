import type { Meta, StoryObj } from "@storybook/react-vite";

import { CardNumber } from "./CardNumber";

const meta = {
  title: "CardNumber",
  component: CardNumber,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    cardNumber: {
      "first-digits": "",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
    },
  },
} satisfies Meta<typeof CardNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const FirstGroupFilled: Story = {
  args: {
    cardNumber: {
      "first-digits": "1234",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
    },
  },
};

export const SecondGroupFilled: Story = {
  args: {
    cardNumber: {
      "first-digits": "1234",
      "second-digits": "5678",
      "third-digits": "",
      "fourth-digits": "",
    },
  },
};

export const ThirdGroupMasked: Story = {
  args: {
    cardNumber: {
      "first-digits": "1234",
      "second-digits": "5678",
      "third-digits": "9012",
      "fourth-digits": "",
    },
  },
};

export const FullyFilledAndMasked: Story = {
  args: {
    cardNumber: {
      "first-digits": "1234",
      "second-digits": "5678",
      "third-digits": "9012",
      "fourth-digits": "3456",
    },
  },
};
