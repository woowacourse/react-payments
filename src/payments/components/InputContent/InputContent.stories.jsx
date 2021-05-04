import React from "react";
import { getId } from "../../../@shared/utils";
import Circle from "../Circle/Circle";
import Input from "../Input/Input";
import {
  CardNumberInput,
  ExpirationDateInput,
  OwnerNameInput,
  SecurityCodeInput,
  PasswordInput,
} from "../Input/Input.stories";
import QuestionIcon from "../ToolTip/QuestionIcon";
import ToolTip from "../ToolTip/ToolTip";

import InputContent from "./InputContent";

export default {
  title: "InputContent",
  component: InputContent,
};

const Template = args => <InputContent {...args} />;

export const CardNumberInputContent = Template.bind({});

CardNumberInputContent.args = {
  children: (
    <>
      <Input key={getId()} {...CardNumberInput.args} />
      <Input key={getId()} {...CardNumberInput.args} />
      <Input key={getId()} {...CardNumberInput.args} type="password" />
      <Input key={getId()} {...CardNumberInput.args} type="password" />
    </>
  ),
};

export const ExpirationDateInputContent = Template.bind({});

ExpirationDateInputContent.args = {
  children: <Input {...ExpirationDateInput.args} />,
};

export const OwnerNameInputContent = Template.bind({});

OwnerNameInputContent.args = {
  children: <Input {...OwnerNameInput.args} />,
};

export const SecurityCodeInputContentWhenToolTipIsVisible = Template.bind({});

SecurityCodeInputContentWhenToolTipIsVisible.args = {
  children: (
    <>
      <Input {...SecurityCodeInput.args} />
      <QuestionIcon />
      <ToolTip isVisible />
    </>
  ),
};

export const SecurityCodeInputContentWhenToolTipIsInvisible = Template.bind({});

SecurityCodeInputContentWhenToolTipIsInvisible.args = {
  children: (
    <>
      <Input {...SecurityCodeInput.args} />
      <QuestionIcon />
      <ToolTip isVisible={false} />
    </>
  ),
};

export const PasswordInputContent = Template.bind({});

PasswordInputContent.args = {
  children: (
    <>
      <Input {...PasswordInput.args} />
      <Input {...PasswordInput.args} />
      <div className="flex justify-center w-10">
        <Circle width="5" height="5" />
      </div>
      <div className="flex justify-center w-10">
        <Circle width="5" height="5" />
      </div>
    </>
  ),
};
