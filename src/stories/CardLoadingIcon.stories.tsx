import { Meta, StoryObj } from "@storybook/react";
import CardLoadingIcon from "../components/CardLoadingIcon";

const meta = {
  title: "CardLoadingIcon",
  component: CardLoadingIcon,
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {},
};
