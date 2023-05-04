import type { Meta } from "@storybook/react";

import CardCoModal from "../../component/common/CardCoModal";
import CardCoButton from "../../component/common/CardCoButton";
import { CARD_CO_NAME } from "../../CONSTANT";
import { CardCo } from "../../type";

const meta: Meta = {
  title: "CardCoModal component",
  component: CardCoModal,
  argTypes: {
    isOpen: {
      action: "카드사 상태 변경 및 카드사 입력 완료로 상태 변경",
    },
  },
};

const cardCoList = Object.keys(CARD_CO_NAME) as CardCo[];

export const iconModalTest = (args: any) => (
  <CardCoModal {...args}>
    {cardCoList.map((cardCo) => (
      <CardCoButton
        key={cardCo}
        cardCo={cardCo}
        changeCardCoStatus={() => {}}
      />
    ))}
  </CardCoModal>
);
iconModalTest.args = {};

export default meta;
