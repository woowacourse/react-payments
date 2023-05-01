import type { Meta } from "@storybook/react";

import InputBoxOwner from "../../component/CardInputPage/InputBoxOwner/InputBoxOwner";

const meta: Meta = {
  title: "InputBoxOwner component",
  component: InputBoxOwner,
  argTypes: {
    changeCardOwnerStatus: {
      action: "입력이 변경되면 카드 소유자 입력 유무와 소유자 state를 변경",
    },
  },
};

export default meta;

export const InputTest = (args: any) => (
  <InputBoxOwner {...args}></InputBoxOwner>
);
