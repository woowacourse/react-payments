import type { Meta, StoryObj } from "@storybook/react";
import Announcement from "./Announcement";

const meta = {
  title: "Announcement",
  component: Announcement,
  tags: ["autodocs"],
} satisfies Meta<typeof Announcement>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { main: "Main Title", caption: "Caption" },
};
