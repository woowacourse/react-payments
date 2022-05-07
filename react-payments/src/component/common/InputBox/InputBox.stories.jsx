import Input from "../Input/input.component";
import ConnectorBox from "../ConnectorBox/ConnectorBox.component";
import InputBox from "./InputBox.component";

export default {
  title: "Common/InputBox",
  component: InputBox,
};

export const CardNumberInput = (args) => (
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

export const ExpireDateInput = (args) => (
  <InputBox {...args}>
    <Input type="number" placeholder="MM" />
    <ConnectorBox>/</ConnectorBox>
    <Input type="number" placeholder="YY" />
  </InputBox>
);

ExpireDateInput.args = {
  formType: "expire-date",
};

export const UserNameInput = (args) => (
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

export const SecurityCodeInput = (args) => (
  <InputBox {...args}>
    <Input type="password" />
  </InputBox>
);

SecurityCodeInput.args = {
  formType: "security-code",
};

export const CardPasswordInput = (args) => (
  <InputBox {...args}>
    <Input type="password" />
  </InputBox>
);

CardPasswordInput.args = {
  formType: "card-password",
};
