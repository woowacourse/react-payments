import React from "react";
import Header from "./index";

export default {
  title: "Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "호프샐리",
};
