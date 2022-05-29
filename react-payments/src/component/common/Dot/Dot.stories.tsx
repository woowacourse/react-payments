import Dot, { DotProps } from "component/common/Dot/Dot.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Common/Dot",
  component: Dot,
} as Meta;

const Template: Story<DotProps> = (args) => <Dot {...args} />;

export const PasswordDot = Template.bind({});
PasswordDot.args = {
  styleSize: "small",
  formType: "card-password",
};

export const CardNumberDot = Template.bind({});
CardNumberDot.args = {
  styleSize: "small",
  formType: "card-number",
};

export const ColorBoxDot = Template.bind({});
ColorBoxDot.args = {
  styleSize: "huge",
  cardType: "pocoCard",
};
