import type { Meta } from "@storybook/react";

import Input from "../../component/common/Input";

import "../../style/reset.css";
import "../../component/common/input.css";

const meta: Meta = {
  title: "Input common component",
  component: Input,
  argTypes: {
    onChange: {
      action: "입력창이 변경되면 발생하는 이벤트",
    },
  },
};

export default meta;

export const InputTest = (args: any) => <Input {...args}></Input>;
InputTest.args = {
  type: "text",
  placeholder: "미리보기",
};
