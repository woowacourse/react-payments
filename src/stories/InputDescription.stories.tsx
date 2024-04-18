import { Meta, StoryFn } from "@storybook/react";
import InputDescription, {
  InputDescriptionInterface,
} from "../components/Form/InputDescription";

export default {
  title: "InputDescription",
  component: InputDescription,
} as Meta;

const Template: StoryFn<InputDescriptionInterface> = (args) => (
  <InputDescription {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
};
