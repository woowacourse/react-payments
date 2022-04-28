import InputBox from "./";
import { Input } from "../Input/style";

const Template = (args) => <InputBox {...args} />;

export default {
  title: "InputBox",
  component: InputBox,
};

export const CardNumberInputBox = Template.bind({});
CardNumberInputBox.args = {
  size: 100,
  children: (
    <>
      <Input type="number" />
      <Input type="number" />
      <Input type="password" />
      <Input type="password" />
    </>
  ),
};

export const CardDueDateInputBox = Template.bind({});
CardDueDateInputBox.args = {
  size: 50,
  children: (
    <>
      <Input type="number" placeholder="MM" />
      <Input type="number" placeholder="DD" />
    </>
  ),
};

export const CardOwnerInputBox = Template.bind({});
CardOwnerInputBox.args = {
  size: 100,
  children: (
    <Input
      type="text"
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
    />
  ),
};

export const CardCVCInputBox = Template.bind({});
CardCVCInputBox.args = {
  size: 50,
  children: <Input type="password" />,
};

export const CardPasswordInputBox = Template.bind({});
CardPasswordInputBox.args = {
  size: 10,
  children: <Input type="password" />,
};
