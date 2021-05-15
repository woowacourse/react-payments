import React from "react";
import GuideInput from "./GuideInput";
import questionMark from "../../../assets/svgs/question-mark.svg";
import cardCVC from "../../../assets/images/card-cvc.png";

export default {
  title: "Payments/GuideInput",
  component: GuideInput,
  argTypes: {
    guideIcon: {
      control: {
        type: "select",
        options: {
          default: questionMark,
        },
      },
    },
    guideImage: {
      control: {
        type: "select",
        options: {
          default: cardCVC,
        },
      },
    },
  },
};

const Template = (args) => (
  <>
    <br />
    <br />
    <br />
    <br />
    <GuideInput {...args} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  labelText: "보안코드",
  width: "84px",
};
