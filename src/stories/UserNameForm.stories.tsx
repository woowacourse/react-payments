import { Meta, StoryObj } from "@storybook/react";
import UserNameForm from "../components/Form/UserNameForm";

const meta = {
  title: "UserNameForm",
  component: UserNameForm,
} satisfies Meta<typeof UserNameForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelContent: "User Name",
    inputCount: 1,
    type: "text",
    placeholders: ["JOHN DOE"],
  },
};
