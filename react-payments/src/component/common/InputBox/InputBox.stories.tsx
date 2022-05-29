import Input from "component/common/Input/Input.component";
import ConnectorBox from "component/common/ConnectorBox/ConnectorBox.component";
import InputBox, {
  InputBoxProps,
} from "component/common/InputBox/InputBox.component";

import { Meta, Story } from "@storybook/react";

export default {
  title: "Common/InputBox",
  component: InputBox,
} as Meta;

export const CardNumberInput: Story<InputBoxProps> = (args) => (
  <InputBox {...args}>
    <Input type="number" />
    <ConnectorBox>-</ConnectorBox>
    <Input type="number" />
    <ConnectorBox>-</ConnectorBox>
    <Input type="password" />
    <ConnectorBox>-</ConnectorBox>
    <Input type="password" />
  </InputBox>
);

CardNumberInput.args = {
  formType: "card-number",
};

export const ExpireDateInput: Story<InputBoxProps> = (args) => (
  <InputBox {...args}>
    <Input type="number" placeholder="MM" />
    <ConnectorBox>/</ConnectorBox>
    <Input type="number" placeholder="YY" />
  </InputBox>
);

ExpireDateInput.args = {
  formType: "expire-date",
};

export const UserNameInput: Story<InputBoxProps> = (args) => (
  <InputBox {...args}>
    <Input
      type="text"
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
    />
  </InputBox>
);

UserNameInput.args = {
  formType: "user-name",
};

export const SecurityCodeInput: Story<InputBoxProps> = (args) => (
  <InputBox {...args}>
    <Input type="password" />
  </InputBox>
);

SecurityCodeInput.args = {
  formType: "security-code",
};

export const CardPasswordInput: Story<InputBoxProps> = (args) => (
  <InputBox {...args}>
    <Input type="password" />
  </InputBox>
);

CardPasswordInput.args = {
  formType: "card-password",
};
