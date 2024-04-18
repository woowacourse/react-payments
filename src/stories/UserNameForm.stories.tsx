import { Meta, StoryObj } from "@storybook/react";
import UserNameForm from "../components/Form/UserNameForm";

export default {
  title: "UserNameForm",
  component: UserNameForm,
} as Meta;

type Story = StoryObj<typeof UserNameForm>;

const Template: Story["template"] = (args) => <UserNameForm {...args} />;


export const Default = Template.bind({});
Default.args = {
  labelContent: "User Name",
  inputCount: 1,
  type: "text",
  placeholders: ["JOHN DOE"],
};
