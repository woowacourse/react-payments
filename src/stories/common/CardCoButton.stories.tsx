import type { Meta } from "@storybook/react";

import CardCoButton from "../../component/common/CardCoButton";
import { CardCo } from "../../type";

const meta: Meta = {
  title: "CardCoButton component",
  component: CardCoButton,
  argTypes: {
    changeCardCoStatus: {
      action: "카드사 상태 변경 및 카드사 입력 완료로 상태 변경",
    },
  },
};

export interface Props {
  /** 카드사 변경 */
  cardCo: CardCo;
}

export const iconButtonTest = (args: any) => (
  <CardCoButton {...args}></CardCoButton>
);
iconButtonTest.args = {
  cardCo: "woori",
};

export default meta;
