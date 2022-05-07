import React from "react";

import { Button } from "components/common/Button";

export default {
  title: "Example/Button",
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ width: "150px", border: "1px dotted black" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Button {...args} />;

export const DisabledButtonTemplate = Template.bind({});
DisabledButtonTemplate.args = {
  children: "다음",
  disabled: true,
};

export const enabledButtonTemplate = Template.bind({});
enabledButtonTemplate.args = {
  children: "확인",
  disabled: false,
};
