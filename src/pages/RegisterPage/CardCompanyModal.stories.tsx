import { Meta, StoryObj } from "@storybook/react";
import CardCompanyModal from "./CardCompanyModal";

const meta = {
  component: CardCompanyModal,
  title: "Modal/CardCompanyModal",
} satisfies Meta<typeof CardCompanyModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SecurityCodeStory: Story = {
  args: {},
};
