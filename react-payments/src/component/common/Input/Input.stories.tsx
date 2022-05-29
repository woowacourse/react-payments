import Input from "component/common/Input/Input.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Common/Input",
  component: Input,
  decorators: [
    (Story: Story) => (
      <div style={{ width: "120px" }}>
        <Story />
      </div>
    ),
  ],
};

const Template: Story = (args) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  type: "number",
  placeholder: "number-input",
};
