import type { Meta } from "@storybook/react";
import { filledCardWithoutOwner_test, filledCard_test } from "../../cardData";

import CardPreview from "../../component/common/CardPreview";

import "../../component/common/cardPreview.css";
import "../../style/palette.css";

const meta: Meta = {
  title: "CardPreview component",
  component: CardPreview,
  argTypes: {
    openCardCoModal: {
      action: "카드 미리보기를 누르면 모달이 나와요",
    },
  },
};

export default meta;

export const emptyCard = (args: any) => <CardPreview {...args}></CardPreview>;
emptyCard.args = {
  card: {
    owner: "",
    expirationDate: "",
    cardCo: "woori",
    cardNumber: [],
    securityCode: "",
    password: [],
  },
};

export const filledCard = (args: any) => <CardPreview {...args}></CardPreview>;
filledCard.args = {
  card: filledCard_test,
};

export const filledCardWithoutName = (args: any) => (
  <CardPreview {...args}></CardPreview>
);
filledCardWithoutName.args = {
  card: filledCardWithoutOwner_test,
};
