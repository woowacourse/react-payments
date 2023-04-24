import type { Meta, } from "@storybook/react";

import CardPreview from "../component/common/CardPreview";

const meta: Meta = {
  title: "CardPreview component",
  component: CardPreview,
};

export default meta;

export const emptyCard = (args: any) => <CardPreview {...args}></CardPreview>;
emptyCard.args = {
  card: {},
};

export const filledCard = (args: any) => <CardPreview {...args}></CardPreview>;
filledCard.args = {
  card: {
    name: "qwer",
    number: [1234, 5678, 9012, 3456],
    date: "12/25",
  },
};
