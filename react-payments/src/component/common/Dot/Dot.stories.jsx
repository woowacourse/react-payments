import Dot from "component/common/Dot/Dot.component";

export default {
  title: "Common/Dot",
  component: Dot,
};

const Template = (args) => <Dot {...args} />;

export const PasswordDot = Template.bind({});
PasswordDot.args = {
  size: "small",
  formType: "card-password",
};

export const CardNumberDot = Template.bind({});
CardNumberDot.args = {
  size: "small",
  formType: "card-number",
};

export const ColorBoxDot = Template.bind({});
ColorBoxDot.args = {
  size: "huge",
  cardType: "pocoCard",
};
