import type { Meta, StoryObj } from "@storybook/react-vite";

import CardItem from "../components/common/CardItem";

const meta = {
  title: "CardItem",
  component: CardItem,
  decorators: [
    (Story) => (
      <ul style={{ listStyle: "none", padding: 0, margin: 0, width: 320 }}>
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof CardItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BC: Story = {
  args: {
    issuerCode: "31",
    number: "1234567812345678",
    expirationDate: "04 / 26",
  },
};

export const Shinhan: Story = {
  args: {
    issuerCode: "41",
    number: "1234567812345678",
    expirationDate: "04 / 26",
  },
};

export const KakaoBank: Story = {
  args: {
    issuerCode: "15",
    number: "1234567812345678",
    expirationDate: "04 / 26",
  },
};

export const Hyundai: Story = {
  args: {
    issuerCode: "61",
    number: "1234567812345678",
    expirationDate: "04 / 26",
  },
};

export const Woori: Story = {
  args: {
    issuerCode: "W1",
    number: "1234567812345678",
    expirationDate: "04 / 26",
  },
};

export const Lotte: Story = {
  args: {
    issuerCode: "71",
    number: "1234567812345678",
    expirationDate: "04 / 26",
  },
};

export const Hana: Story = {
  args: {
    issuerCode: "21",
    number: "1234567812345678",
    expirationDate: "04 / 26",
  },
};

export const Kookmin: Story = {
  args: {
    issuerCode: "11",
    number: "1234567812345678",
    expirationDate: "04 / 26",
  },
};

export const UnknownIssuer: Story = {
  args: {
    issuerCode: "99",
    number: "1234567812345678",
    expirationDate: "04 / 26",
  },
};

export const AmexNumber: Story = {
  args: {
    issuerCode: "31",
    number: "371234567890123",
    expirationDate: "09 / 29",
  },
};

export const DinersNumber: Story = {
  args: {
    issuerCode: "41",
    number: "36123456789012",
    expirationDate: "07 / 27",
  },
};
