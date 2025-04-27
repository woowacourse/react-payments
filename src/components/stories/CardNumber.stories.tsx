import type { Meta, StoryObj } from "@storybook/react";
import CardNumber from "../CardNumber/CardNumber";

const meta: Meta<typeof CardNumber> = {
  title: "Example/CardNumber",
  component: CardNumber,
};

export default meta;
type Story = StoryObj<typeof CardNumber>;

export const Primary: Story = {
  args: {
    handleChange: () => {},
    cardNumbers: ["", "", "", ""],
    errorMessage: ["", "", "", ""],
  },
};
