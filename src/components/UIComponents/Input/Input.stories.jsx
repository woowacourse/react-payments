import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Default",
  className: "Default",
  type: "text",
  placeholder: "Default",
  width: "100%",
  maxLength: 3,
  isComplete: false,
};
