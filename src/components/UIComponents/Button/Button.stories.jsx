import ArrowBackIcon from "../../../assets/images/arrowBackIcon.svg";
import HelpIconImage from "../../../assets/images/questionMark.svg";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const NextButton = Template.bind({});
NextButton.args = {
  children: "다음",
  position: "static",
  isSvg: false,
  type: "button",
};

export const CompleteButton = Template.bind({});
CompleteButton.args = {
  children: "완료",
  position: "static",
  isSvg: false,
  type: "button",
};

export const ArrowImgButton = Template.bind({});
ArrowImgButton.args = {
  children: ArrowBackIcon,
  position: "static",
  isSvg: true,
  type: "button",
};

export const HelpImgButton = Template.bind({});
HelpImgButton.args = {
  children: HelpIconImage,
  position: "static",
  isSvg: true,
  type: "button",
};
