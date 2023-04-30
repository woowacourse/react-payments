import type { Meta } from "@storybook/react";

import InputBoxPassword from "../component/CardInputPage/InputBoxPassword/InputBoxPassword";

const meta: Meta = {
  title: "InputBoxPassword component",
  component: InputBoxPassword,
  argTypes: {
    changePasswordStatus: {
      action: "입력이 변경되면 카드 비밀번호 입력 유무와 비밀번호 state를 변경",
    },
  },
};

export default meta;

export const InputTest = (args: any) => (
  <InputBoxPassword {...args}></InputBoxPassword>
);
