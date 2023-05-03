import { StoryFn, Meta } from "@storybook/react";
import { Button } from "../components";
import type { ButtonType } from "../components/common/Button";

export default {
  title: "Button",
  component: Button,
} as Meta<ButtonType>;

const Template: StoryFn<ButtonType> = (props) => (
  <Button {...props} isShown={true} />
);

export const NextButton = Template.bind({});
NextButton.args = {
  children: "다음",
};

export const ConfirmButton = Template.bind({});
ConfirmButton.args = {
  children: "확인",
};
