import React from "react";

import { InputTitle } from "components/common/InputTitle";

export default {
  title: "Example/InputTitle",
  component: InputTitle,
  decorators: [
    (Story) => (
      <div style={{ width: "100%", border: "1px dotted black" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <InputTitle {...args} />;

export const NormalInputTitle = Template.bind({});
NormalInputTitle.args = {
  children: "입력창에 대한 설명",
  isValid: false,
};
