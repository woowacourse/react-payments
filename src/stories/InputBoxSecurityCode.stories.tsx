import type { Meta } from "@storybook/react";

import InputBoxSecurityCode from "../component/CardInputPage/InputBoxSecurityCode/InputBoxSecurityCode";

const meta: Meta = {
  title: "InputBoxSecurityCode component",
  component: InputBoxSecurityCode,
  argTypes: {
    changeSecurityCodeStatus: {
      action: "입력이 변경되면 카드 보안코드 입력 유무와 보안코드 state를 변경",
    },
  },
};

export default meta;

export const InputTest = (args: any) => (
  <InputBoxSecurityCode {...args}></InputBoxSecurityCode>
);
