import { StoryFn, Meta } from "@storybook/react";
import CardInput, { CardInputType } from "../components/CardInput";

export default {
  title: "CardInput",
  component: CardInput,
} as Meta<CardInputType>;

const Template: StoryFn<CardInputType> = (props) => (
  <CardInput {...props} value="" />
);

export const CardNumber = Template.bind({});
CardNumber.args = {
  id: "cardNumber",
  placeholder: "카드 번호를 입력해 주세요.",
  width: "318px",
  isAutoFocus: true,
  isRequired: true,
};

export const ExpiredDate = Template.bind({});
ExpiredDate.args = {
  id: "expiredDate",
  placeholder: "MM / YY",
  width: "137px",
  isRequired: true,
};

export const OwnerName = Template.bind({});
OwnerName.args = {
  id: "ownerName",
  placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
  width: "318px",
  isRequired: false,
};

export const Cvc = Template.bind({});
Cvc.args = {
  id: "cvc",
  width: "84px",
  isSecured: true,
  isRequired: true,
};

export const Password = Template.bind({});
Password.args = {
  id: "password1",
  width: "42px",
  isSecured: true,
  isRequired: true,
};
