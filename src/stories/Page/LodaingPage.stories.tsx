import type { Meta, StoryObj } from "@storybook/react";
import LoadingPage from "components/LoadingPage/LoadingPage";

const meta = {
  component: LoadingPage,
  title: "Page",
} satisfies Meta<typeof LoadingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {},
};
