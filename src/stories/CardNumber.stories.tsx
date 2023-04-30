import type { Meta } from "@storybook/react";

import CardNumber from "../component/CardInputPage/InputBoxCardNumber/CardNumber";

const meta: Meta = {
  title: "CardNumber component",
  component: CardNumber,
  argTypes: {
    changeHasError: {
      action: "0: 에러있음, 1: 미완료, 2:완료",
    },
    changeCardNumberStatus: {
      action: "카드번호 상태 변경 및 카드번호 입력 상태 변경",
    },
  },
};

export default meta;

export const InputTest = (args: any) => <CardNumber {...args}></CardNumber>;
