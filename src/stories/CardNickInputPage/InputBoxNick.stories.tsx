import type { Meta } from "@storybook/react";
import InputBoxNick from "../../component/CardNickInputPage/InputBoxNick/InputBoxNick";

import "../../style/reset.css";
import "../../component/CardNickInputPage/InputBoxNick/inputBoxNick.css";

const meta: Meta = {
  title: "InputBoxNick component",
  component: InputBoxNick,
  argTypes: {
    submitNickAndSetCard: {
      action: "입력창이 변경되면 발생하는 이벤트",
    },
  },
};

export default meta;

export const InputBoxNickTest = (args: any) => (
  <InputBoxNick {...args}></InputBoxNick>
);
InputBoxNickTest.args = {};
