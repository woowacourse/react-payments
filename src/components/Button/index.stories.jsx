import Button from "./";
import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { COLORS } from "../../constant";

const Template = (args) => <Button {...args} />;

export default {
  title: "Button",
  component: Button,
 
};

export const Primary = Template.bind({});
Primary.args = {
  children: "다음",
  color: COLORS.MINT,
};

export const BeforeButton = Template.bind({});
BeforeButton.args = {
  children: (<Arrow/>)
};
