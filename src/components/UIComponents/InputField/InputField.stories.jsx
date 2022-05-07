import React from "react";
import Input from "../Input/Input";
import InputField from "./InputField";

export default {
  title: "UI Components/InputField",
  component: InputField,
};

const Template = (args) => <InputField {...args} />;
const InputTemplate = (args) => <Input {...args} />;

const DefaultInput = InputTemplate.bind({});
const DefaultInputElement = (placeholder) => (
  <DefaultInput placeholder={placeholder} />
);

export const Default = Template.bind({});
Default.args = {
  labelText: "default input",
  children: DefaultInputElement("default"),
};

export const MonthYearInputs = Template.bind({});
MonthYearInputs.args = {
  labelText: "Month Year Inputs",
  children: [DefaultInputElement("MM"), "/", DefaultInputElement("YY")],
};

export const FourNumberInput = Template.bind({});
FourNumberInput.args = {
  labelText: "Number Input",
  children: [
    DefaultInputElement(1234),
    "-",
    DefaultInputElement(1234),
    "-",
    DefaultInputElement(1234),
    "-",
    DefaultInputElement(1234),
  ],
};
