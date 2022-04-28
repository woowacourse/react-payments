import React from "react";
import Input from "./Input";
import InputField from "./InputField";

export default {
  title: "InputField",
  component: InputField,
};

const Template = (args) => <InputField {...args} />;
const InputTemplate = (args) => <Input {...args} />;

const DefaultInput = InputTemplate.bind({});

export const Default = Template.bind({});
Default.args = {
  labelText: "sample label",
  children: <DefaultInput placeholder="placeholder" />,
};

export const TwoInputs = Template.bind({});
TwoInputs.args = {
  labelText: "sample label",
  children: [
    <DefaultInput placeholder="placeholder" />,
    "/",
    <DefaultInput placeholder="placeholder" />,
  ],
};

export const FourInputs = Template.bind({});
FourInputs.args = {
  labelText: "sample label",
  children: [
    <DefaultInput placeholder="placeholder" />,
    "-",
    <DefaultInput placeholder="placeholder" />,
    "-",
    <DefaultInput placeholder="placeholder" />,
    "-",
    <DefaultInput placeholder="placeholder" />,
  ],
};
