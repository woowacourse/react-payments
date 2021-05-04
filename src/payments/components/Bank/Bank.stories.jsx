import React from "react";
import Bank from "./Bank";

export default {
  title: "Bank",
  component: Bank,
};

const Template = args => <Bank {...args} />;

export const KB = Template.bind({});

KB.args = {
  backgroundColor: "bg-custom-red",
  name: "국민",
};

export const Samsung = Template.bind({});

Samsung.args = {
  backgroundColor: "bg-custom-blue",
  name: "삼성",
};

export const NH = Template.bind({});

NH.args = {
  backgroundColor: "bg-custom-green",
  name: "농협",
};

export const BC = Template.bind({});

BC.args = {
  backgroundColor: "bg-custom-purple",
  name: "BC",
};

export const Baemin = Template.bind({});

Baemin.args = {
  backgroundColor: "bg-custom-gradient-mint",
  name: "배민",
};

export const Shinhan = Template.bind({});

Shinhan.args = {
  backgroundColor: "bg-custom-pink",
  name: "신한",
};

export const Jeju = Template.bind({});

Jeju.args = {
  backgroundColor: "bg-custom-orange",
  name: "제주",
};

export const Kakao = Template.bind({});

Kakao.args = {
  backgroundColor: "bg-custom-yellow",
  name: "카카오",
};
