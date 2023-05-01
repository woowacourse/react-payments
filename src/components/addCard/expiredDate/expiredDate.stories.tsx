import { Meta, StoryObj } from "@storybook/react";
import { ExpiredDate } from "./expiredDate";

const meta: Meta<typeof ExpiredDate> = {
  component: ExpiredDate,
  title: "ExpiredDate",
};

export default meta;

type Story = StoryObj<typeof ExpiredDate>;

export const Default: Story = {
  args: {},
};
