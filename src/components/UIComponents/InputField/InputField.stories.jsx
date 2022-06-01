import Input from "../Input/Input";
import InputField from "./InputField";
import {
  HelpIcon,
  SECURITY_CODE_DESCRIPTION,
} from "../../AddCard/CardSecurityCodeInput";
import { InputCounter } from "../../AddCard/CardHolderNameInput";

export default {
  title: "InputField",
  component: InputField,
};

const InputTemplate = (args) => <Input {...args} />;
const InputFieldTemplate = (args) => <InputField {...args} />;

const DefaultInput = InputTemplate.bind({});

export const PasswordInput = InputFieldTemplate.bind({});
PasswordInput.args = {
  labelText: "카드 비밀번호 앞 두 자리",
  wrapperWidth: "90px",
  splitCount: 2,
  guideMessage: "비밀번호는 0~9까지 숫자로 입력해주세요.",
  isComplete: false,
  children: [
    <DefaultInput
      name={"password"}
      className={"password"}
      type={"password"}
      placeholder={"•"}
      width={"100%"}
      maxLength={1}
      isComplete={false}
    />,
    <DefaultInput
      name={"password"}
      className={"password"}
      type={"password"}
      placeholder={"•"}
      width={"100%"}
      maxLength={1}
      isComplete={false}
    />,
  ],
};

export const CardNumberInput = InputFieldTemplate.bind({});
CardNumberInput.args = {
  labelText: "카드번호",
  wrapperWidth: "100%",
  horizontalAlign: "space-around",
  guideMessage: "카드 번호는 0~9까지 숫자로 입력해주세요.",
  children: [
    <DefaultInput
      name={"cardNumber"}
      className={"cardNumber"}
      type={"number"}
      placeholder={"1 2 3 4"}
      maxLength={4}
      autoFocus={true}
      required
      isComplete={false}
    />,
    <p>-</p>,
    <DefaultInput
      name={"cardNumber"}
      className={"cardNumber"}
      type={"number"}
      placeholder={"1 2 3 4"}
      maxLength={4}
      required
      isComplete={false}
    />,
    <p>-</p>,
    <DefaultInput
      name={"cardNumber"}
      className={"cardNumber"}
      type={"password"}
      placeholder={"• • • •"}
      maxLength={4}
      required
      isComplete={false}
    />,
    <p>-</p>,
    <DefaultInput
      name={"cardNumber"}
      className={"cardNumber"}
      type={"password"}
      placeholder={"• • • •"}
      maxLength={4}
      required
      isComplete={false}
    />,
  ],
};

export const ExpireDateInput = InputFieldTemplate.bind({});
ExpireDateInput.args = {
  labelText: "만료일 (MM/YY)",
  wrapperWidth: "135px",
  horizontalAlign: "center",
  guideMessage: "만료일은 0~9까지 숫자로 입력해주세요.",
  isComplete: false,
  children: [
    <DefaultInput
      name={"expireDate"}
      className={"expireDate"}
      type={"text"}
      placeholder={"MM"}
      width={"40px"}
      maxLength={2}
      required
      isComplete={false}
    />,
    <p>/</p>,
    <DefaultInput
      name={"expireDate"}
      className={"expireDate"}
      type={"text"}
      placeholder={"YY"}
      width={"40px"}
      maxLength={2}
      required
      isComplete={false}
    />,
  ],
};

export const HolderNameInput = InputFieldTemplate.bind({});
HolderNameInput.args = {
  labelText: "카드 소유자 이름 (선택)",
  wrapperWidth: "100%",
  horizontalAlign: "flex-start",
  guideMessage: "카드 소유자 이름은 영문 대문자만 입력해주세요.",
  isComplete: false,
  children: (
    <DefaultInput
      name={"holderName"}
      className={"holderName"}
      type={"text"}
      placeholder={"카드에 표시된 이름과 동일하게 입력하세요."}
      width={"100%"}
      textAlign={"left"}
      maxLength={30}
      isComplete={false}
    />
  ),
  OptionalComponent: (
    <InputCounter currLength={0} maxLength={30} isComplete={false} />
  ),
};

export const SecurityCodeInput = InputFieldTemplate.bind({});
SecurityCodeInput.args = {
  labelText: "보안 코드(CVC/CVV)",
  wrapperWidth: "85px",
  guideMessage: "카드 뒷 면에 있는 3자리 숫자를 적어주세요.",
  isComplete: false,
  children: (
    <DefaultInput
      name={"securityCode"}
      className={"securityCode"}
      type={"password"}
      placeholder={"• • •"}
      width={"100%"}
      maxLength={3}
      required
      isComplete={true}
    />
  ),
  OptionalComponent: <HelpIcon description={SECURITY_CODE_DESCRIPTION} />,
};
