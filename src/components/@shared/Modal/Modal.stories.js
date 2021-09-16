import React from "react";
import Modal from "./index";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {},
};

const Template = (args) => <Modal {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  isVisible: true,
  children: <div>hello</div>,
};
