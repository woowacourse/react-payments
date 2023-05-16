import { Meta, StoryObj } from "@storybook/react";

import InformationButton from "./InformationButton";

const meta: Meta<typeof InformationButton> = {
  component: InformationButton,
  title: "Components/Button",
};

export default meta;
type Story = StoryObj<typeof InformationButton>;

export const Information: Story = {
  args: {},
};
