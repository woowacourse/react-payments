import React from "react";
import InputTitle from "../InputTitle/InputTitle";
import {
  CardNumberInputTitle,
  ExpirationDateInputTitle,
  OwnerNameInputTitle,
  PasswordInputTitle,
  SecurityCodeInputTitle,
} from "../InputTitle/InputTitle.stories";
import InputLabel from "./InputLabel";

export default {
  title: "InputLabel",
  component: InputLabel,
};

const Template = args => <InputLabel {...args} />;

export const CardNumberInputLabel = Template.bind({});

CardNumberInputLabel.args = {
  children: <InputTitle {...CardNumberInputTitle.args} />,
};

export const ExpirationDateInputLabel = Template.bind({});

ExpirationDateInputLabel.args = {
  children: <InputTitle {...ExpirationDateInputTitle.args} />,
};

export const OwnerNameInputLabel = Template.bind({});

OwnerNameInputLabel.args = {
  children: (
    <>
      <InputTitle {...OwnerNameInputTitle.args} />
      <span className="text-custom-gray-300 text-xs font-medium">4/30</span>
    </>
  ),
};

export const SecurityCodeInputLabel = Template.bind({});

SecurityCodeInputLabel.args = {
  children: <InputTitle {...SecurityCodeInputTitle.args} />,
};

export const PasswordInputLabel = Template.bind({});

PasswordInputLabel.args = {
  children: <InputTitle {...PasswordInputTitle.args} />,
};
