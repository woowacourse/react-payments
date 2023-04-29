import type { Meta } from "@storybook/react";

import CardPreview from "../component/common/CardPreview";

const meta: Meta = {
  title: "CardPreview component",
  component: CardPreview,
};

export default meta;

export const emptyCard = (args: any) => (
  <CardPreview {...args} openCardCoModal={() => {}}></CardPreview>
);
emptyCard.args = {
  card: {
    owner: "",
    expirationDate: "",
    cardCo: "",
    cardNumber: [],
    securityCode: "",
    password: [],
  },
};

export const filledCard = (args: any) => (
  <CardPreview {...args} openCardCoModal={() => {}}></CardPreview>
);
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
