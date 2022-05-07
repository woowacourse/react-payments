import Button from ".";
import { ReactComponent as ArrowImage } from "assets/arrow.svg";

const Template = (args) => <Button {...args} />;

export default {
  title: "component/Button",
  component: Button,
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: "다음",
  color: "#04C09E",
};

export const BeforeButton = Template.bind({});
BeforeButton.args = {
  children: (
    <div>
      <ArrowImage />
    </div>
  ),
  color: "#525252",
};
