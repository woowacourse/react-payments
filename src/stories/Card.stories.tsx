import { StoryFn, Meta } from "@storybook/react";
import Card from "../components/Card";
import type { CardType } from "../types";

export default {
  title: "Card",
  component: Card,
} as Meta<CardType>;

const Template: StoryFn<CardType> = (props) => (
  <Card
    {...props}
    cardNumber="1111-2222-3333-4444"
    ownerName="light"
    expiredDate="12 / 24"
    name="카드"
    cvc="123"
    password="12"
  />
);

export const BcCard = Template.bind({});
BcCard.args = {
  cardCompany: "BC카드",
};

export const ShinhanCard = Template.bind({});
ShinhanCard.args = {
  cardCompany: "신한카드",
};

export const KakaoCard = Template.bind({});
KakaoCard.args = {
  cardCompany: "카카오뱅크",
};

export const HyundaiCard = Template.bind({});
HyundaiCard.args = {
  cardCompany: "현대카드",
};

export const WooriCard = Template.bind({});
WooriCard.args = {
  cardCompany: "우리카드",
};

export const LotteCard = Template.bind({});
LotteCard.args = {
  cardCompany: "롯데카드",
};

export const HanaCard = Template.bind({});
HanaCard.args = {
  cardCompany: "하나카드",
};

export const KbCard = Template.bind({});
KbCard.args = {
  cardCompany: "국민카드",
};

export const EmptyCard = Template.bind({});
EmptyCard.args = {
  cardCompany: "카드사선택필요",
};
