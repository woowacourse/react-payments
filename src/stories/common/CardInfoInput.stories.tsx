import type { Meta } from "@storybook/react";

import CardInfoInput from "../../component/common/CardInfoInput";

import "../../style/reset.css";
import "../../component/common/cardInfoInput.css";

const meta: Meta = {
  title: "CardInfoInput common component",
  component: CardInfoInput,
  argTypes: {
    onChange: {
      action: "입력창이 변경되면 발생하는 이벤트",
    },
  },
};

export default meta;

export const InputTest = (args: any) => (
  <CardInfoInput {...args}></CardInfoInput>
);
InputTest.args = {
  type: "text",
  placeholder: "미리보기",
};
