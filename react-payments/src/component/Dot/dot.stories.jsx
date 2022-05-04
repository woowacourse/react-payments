import Dot from "./dot.component";

export default {
  title: "Dot",
  component: Dot,
};

export const DefaultDot = (args) => <Dot {...args} />;
DefaultDot.args = {
  dotClass: "password-form",
};

export const CardNumberDot = (args) => <Dot {...args} />;
CardNumberDot.args = {
  dotClass: "card-number",
};
