import { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta = {
  title: "Card",
  component: Card,
};

export default meta;

type CardProps = {
  cardNumbers: string[];
  date: Record<string, string>;
  ownerName: string;
};

export const Default: StoryObj<CardProps> = (args) => <Card {...args} />;

Default.args = {
  cardNumbers: ["1234", "5678", "9012", "3456"],
  date: { month: "01", year: "25" },
  ownerName: "John Doe",
};

// 이 부분은 스토리북에서 각각의 카드 로고를 테스트하기 위한 예시입니다.
export const VisaCard: StoryObj<CardProps> = (args) => (
  <Card {...args} cardNumbers={["4111", "1111", "1111", "1111"]} />
);
VisaCard.args = {
  ownerName: "John Doe",
  date: { month: "01", year: "25" },
};

export const MasterCard: StoryObj<CardProps> = (args) => (
  <Card {...args} cardNumbers={["5210", "1111", "1111", "1111"]} />
);
MasterCard.args = {
  ownerName: "John Doe",
  date: { month: "01", year: "25" },
};
