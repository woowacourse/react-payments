import type { Meta } from "@storybook/react";

import CardCoButton from "../component/common/CardCoButton";
import { CardCo } from "../type";

const meta: Meta = {
  title: "CardCoButton component",
  component: CardCoButton,
  argTypes: {
    changeCardCoStatus: { action: "Is input complete?" },
  },
};

export interface BtnProps {
  /** 카드사 변경 */
  cardCo: CardCo;
}

export const renderingTest = (args: any) => (
  <CardCoButton {...args}></CardCoButton>
);
renderingTest.args = {
  cardCo: "woori",
  changeCardCoStatus: () => {},
};

export default meta;
