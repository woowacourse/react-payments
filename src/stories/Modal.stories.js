import React from "react";

import { Modal } from "../components/common/Modal";
import { CardSelectModal } from "../components/cardRegister/CardSelectModal";
import { CVCHelperModal } from "../components/cardRegister/CVCHelperModal";

const CARD_TYPES = [
  { name: "포코", color: "gold" },
  { name: "준", color: "#04c09e" },
  { name: "공원", color: "green" },
  { name: "후이", color: "#9198e5" },
  { name: "유세지", color: "#AB46D2" },
  { name: "마르코", color: "#E76E9A" },
  { name: "아놀드", color: "#FF5F00" },
  { name: "록바", color: "#FBCD58" },
];

export default {
  title: "Example/Modal",
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const CardSelectModalTemplate = Template.bind({});
CardSelectModalTemplate.args = {
  children: <CardSelectModal cardTypes={CARD_TYPES} />,
  visible: true,
};

export const CVCHelperModalTemplate = Template.bind({});
CVCHelperModalTemplate.args = {
  children: <CVCHelperModal />,
  visible: true,
};
