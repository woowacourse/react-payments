import { Meta, StoryObj } from "@storybook/react";
import CardList from "./CardList";

const meta: Meta<typeof CardList> = {
  title: "CardList",
  component: CardList,
};

export default meta;

type Story = StoryObj<typeof CardList>;

export const NoCard: Story = {
  args: {
    cards: [],
  },
};

export const ManyCards: Story = {
  args: {
    cards: [
      {
        cardName: "엄마카드",
        cardCompany: "현대카드",
        cardNumber: { firstGroup: "1234", secondGroup: "1234", thirdGroup: "1234", fourthGroup: "1234" },
        ownerName: "LEE H Y",
        expirationDate: { month: "10", year: "96" },
        securityCode: "123",
        password: { first: "1", second: "2" },
      },
      {
        cardName: "아빠카드",
        cardCompany: "하나카드",
        cardNumber: { firstGroup: "1234", secondGroup: "1234", thirdGroup: "1234", fourthGroup: "1234" },
        ownerName: "KIM J K",
        expirationDate: { month: "10", year: "96" },
        securityCode: "123",
        password: { first: "1", second: "2" },
      },
      {
        cardName: "할머니 카드",
        cardCompany: "비씨카드",
        cardNumber: { firstGroup: "1234", secondGroup: "1234", thirdGroup: "1234", fourthGroup: "1234" },
        ownerName: "KIM",
        expirationDate: { month: "10", year: "96" },
        securityCode: "123",
        password: { first: "1", second: "2" },
      },
      {
        cardName: "할아버지 카드",
        cardCompany: "우리카드",
        cardNumber: { firstGroup: "1234", secondGroup: "1234", thirdGroup: "1234", fourthGroup: "1234" },
        ownerName: "KIM",
        expirationDate: { month: "10", year: "96" },
        securityCode: "123",
        password: { first: "1", second: "2" },
      },
    ],
  },
};
