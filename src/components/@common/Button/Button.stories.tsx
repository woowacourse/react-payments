import { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const button: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
  argTypes: {},
};

export default button;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => {
    return <Button {...args} />;
  },

  args: {
    text: "다음",
    type: "submit",
    disabled: false,
  },
};
