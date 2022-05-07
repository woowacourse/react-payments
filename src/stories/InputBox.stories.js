import React from "react";

import { InputBox } from "components/common/InputBox";
import { InputBasic } from "components/common/InputBasic";
import { RULE_INPUT } from "constants/constants";

export default {
  title: "Example/InputBox",
  component: InputBox,
};

const Template = (args) => <InputBox {...args} />;

export const CardNumbers = Template.bind({});
CardNumbers.args = {
  children: (
    <>
      <InputBasic
        type="text"
        placeholder="test holder"
        maxLength="4"
        pattern={RULE_INPUT.CARD_NUMBER_RULE}
      />
      <InputBasic
        type="text"
        placeholder="test holder"
        maxLength="4"
        pattern={RULE_INPUT.CARD_NUMBER_RULE}
      />
      <InputBasic
        type="text"
        placeholder="test holder"
        maxLength="4"
        pattern={RULE_INPUT.CARD_NUMBER_RULE}
      />
      <InputBasic
        type="text"
        placeholder="test holder"
        maxLength="4"
        pattern={RULE_INPUT.CARD_NUMBER_RULE}
      />
    </>
  ),
};
