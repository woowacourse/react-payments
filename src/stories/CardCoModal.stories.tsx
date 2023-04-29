import type { Meta } from "@storybook/react";

import CardCoModal from "../component/common/CardCoModal";

const meta: Meta = {
  title: "CardCoModal component",
  component: CardCoModal,
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
  changeCardCoStatus: () => {},
};

export default meta;
