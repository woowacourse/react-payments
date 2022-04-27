import React from "react";
import AddCardPage from "./AddCardPage";

export default {
  title: "AddCardPage",
  component: AddCardPage,
};

const Template = (args) => <AddCardPage {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  description: "호프샐리 페어입니다.",
};
