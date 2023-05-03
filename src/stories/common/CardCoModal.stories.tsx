import type { Meta } from "@storybook/react";

import CardCoModal from "../../component/common/CardCoModal";

const meta: Meta = {
  title: "CardCoModal component",
  component: CardCoModal,
  argTypes: {
    changeCardCoStatus: {
      action: "카드사 상태 변경 및 카드사 입력 완료로 상태 변경",
    },
  },
};

export const renderingTest = (args: any) => (
  <CardCoModal {...args}></CardCoModal>
);
renderingTest.args = {
  cardCoList: [
    "woori",
    "hana",
    "kakao",
    "hyundai",
    "shinhan",
    "kb",
    "bc",
    "lotte",
  ],
};

export default meta;
