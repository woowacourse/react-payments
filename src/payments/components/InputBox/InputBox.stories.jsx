import React from "react";
import InputBox from "./InputBox";
import InputLabel from "../InputLabel/InputLabel";
import {
  CardNumberInputLabel,
  ExpirationDateInputLabel,
  OwnerNameInputLabel,
  PasswordInputLabel,
  SecurityCodeInputLabel,
} from "../InputLabel/InputLabel.stories";
import InputContent from "../InputContent/InputContent";
import {
  CardNumberInputContent,
  ExpirationDateInputContent,
  OwnerNameInputContent,
  PasswordInputContent,
  SecurityCodeInputContentWhenToolTipIsInvisible,
  SecurityCodeInputContentWhenToolTipIsVisible,
} from "../InputContent/InputContent.stories";

export default {
  title: "InputBox",
  component: InputBox,
};

const Template = args => <InputBox {...args} />;

export const CardNumberInputBox = Template.bind({});

CardNumberInputBox.args = {
  children: (
    <>
      <InputLabel {...CardNumberInputLabel.args} />
      <InputContent {...CardNumberInputContent.args} />
    </>
  ),
};

export const ExpirationDateInputBox = Template.bind({});

ExpirationDateInputBox.args = {
  children: (
    <>
      <InputLabel {...ExpirationDateInputLabel.args} />
      <InputContent {...ExpirationDateInputContent.args} />
    </>
  ),
};

export const OwnerNameInputBox = Template.bind({});

OwnerNameInputBox.args = {
  children: (
    <>
      <InputLabel {...OwnerNameInputLabel.args} />
      <InputContent {...OwnerNameInputContent.args} />
    </>
  ),
};

export const SecurityCodeInputBoxWithToolTipOpen = Template.bind({});

SecurityCodeInputBoxWithToolTipOpen.args = {
  children: (
    <>
      <InputLabel {...SecurityCodeInputLabel.args} />
      <InputContent {...SecurityCodeInputContentWhenToolTipIsVisible.args} />
    </>
  ),
};

export const SecurityCodeInputBoxWithToolTipClose = Template.bind({});

SecurityCodeInputBoxWithToolTipClose.args = {
  children: (
    <>
      <InputLabel {...SecurityCodeInputLabel.args} />
      <InputContent {...SecurityCodeInputContentWhenToolTipIsInvisible.args} />
    </>
  ),
};

export const PasswordInputBox = Template.bind({});

PasswordInputBox.args = {
  children: (
    <>
      <InputLabel {...PasswordInputLabel.args} />
      <InputContent {...PasswordInputContent.args} />
    </>
  ),
};
