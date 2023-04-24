import { Meta, StoryObj } from "@storybook/react";

import InformationButton from "../components/Button/InformationButton";

const meta: Meta<typeof InformationButton> = {
  component: InformationButton,
  title: "Button",
};

export default meta;
type Story = StoryObj<typeof InformationButton>;

export const Information: Story = {
  args: {},
};
