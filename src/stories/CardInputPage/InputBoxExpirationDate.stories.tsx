import type { Meta } from "@storybook/react";
import InputBoxExpirationDate from "../../component/CardInputPage/InputBoxExpirationDate/InputBoxExpirationDate";

const meta: Meta = {
  title: "InputBoxExpirationDate component",
  component: InputBoxExpirationDate,
  argTypes: {
    changeCardExpirationDateStatus: {
      action: "입력이 변경되면 카드 만료일 입력 유무 및 만료일 state를 변경",
    },
  },
};

export default meta;

export const InputTest = (args: any) => (
  <InputBoxExpirationDate {...args}></InputBoxExpirationDate>
);
