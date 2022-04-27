import React from "react";
import ErrorMessage from "./index";

export default {
  title: "ErrorMessage",
  component: ErrorMessage,
};

const Template = (args) => <ErrorMessage {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  message: "오류 오류 오류 발생",
};
