import { Meta, StoryObj } from "@storybook/react";
import CardCompanyIcon from "./CardCompanyIcon";

const meta: Meta<typeof CardCompanyIcon> = {
  title: "CardCompanyIcon",
  component: CardCompanyIcon,
};

export default meta;

type Story = StoryObj<typeof CardCompanyIcon>;

export const Primary: Story = {
  args: { company: "비씨카드" },
};
