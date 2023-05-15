import type { Meta } from "@storybook/react";

import InputBoxCardNumber from "../../component/CardInputPage/InputBoxCardNumber/InputBoxCardNumber";

const meta: Meta = {
  title: "InputBoxCardNumber component",
  component: InputBoxCardNumber,
  argTypes: {
    changeCardNumberStatus: {
      action:
        "입력이 변경되면 최종 카드번호 입력 유무와 카드 번호 state를 변경",
    },
  },
};

export default meta;

export const inputTest = (args: any) => (
  <InputBoxCardNumber {...args}></InputBoxCardNumber>
);
