import { Meta, StoryObj } from "@storybook/react";

import Homepage from "../components/Homepage";

const meta: Meta<typeof Homepage> = {
  component: Homepage,
  title: "Page",
};

export default meta;
type Story = StoryObj<typeof Homepage>;

//title,cardNumberSet,owner,expiracy
export const Home: Story = {
  args: {},
};
