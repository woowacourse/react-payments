import { Meta, StoryObj } from "@storybook/react";
import Card from "../component/Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

const cardNumber = {
  first: null,
  second: null,
  third: null,
  fourth: null,
  MM: null,
  YY: null,
  CVC: null,
};

const renderBrandCard = (cardType: "default" | "visa" | "mastercard") => {
  return <Card cardNumber={cardNumber} cardType={cardType} />;
};

export const Default: Story = {
  render: () => renderBrandCard("default"),
};

export const Visa: Story = {
  render: () => renderBrandCard("visa"),
};

export const Mastercard: Story = {
  render: () => renderBrandCard("mastercard"),
};

/*
1. default일때
2. visa일때
3. mastercard일때

1. 카드번호 렌더링 잘 되는지 
- 2개 입력했을때
- 4개 입력했을때
2. 유효기간 렌더링 잘 되는지
*/
