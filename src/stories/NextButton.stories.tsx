import { Meta, StoryObj } from "@storybook/react";

import NextButton from "../components/Button/NextButton";

const meta: Meta<typeof NextButton> = {
  component: NextButton,
  title: "Button",
};

export default meta;
type Story = StoryObj<typeof NextButton>;

export const Next: Story = {
  args: {},
};
