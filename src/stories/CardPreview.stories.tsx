import type { Meta } from "@storybook/react";

import CardPreview from "../component/common/CardPreview";

import "../component/common/cardPreview.css";
import "../style/palette.css";

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
  card: {
    owner: "hi",
    expirationDate: "12/23",
    cardCo: "woori",
    cardNumber: [1234, 5678, 9984, 1245],
    securityCode: "124",
    password: ["1", "6"],
  },
};

export const filledCardWithoutName = (args: any) => (
  <CardPreview {...args}></CardPreview>
);
filledCardWithoutName.args = {
  card: {
    owner: "",
    expirationDate: "12/23",
    cardCo: "woori",
    cardNumber: [1234, 5678, 9984, 1245],
    securityCode: "124",
    password: ["1", "6"],
  },
};
