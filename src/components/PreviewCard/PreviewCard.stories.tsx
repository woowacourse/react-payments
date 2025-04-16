import type { Meta, StoryObj } from "@storybook/react";
import PreviewCard from "./PreviewCard";

const meta = {
  title: "MyComponent/MyPreviewCard",
  component: PreviewCard,
  tags: ["autodocs"],
} satisfies Meta<typeof PreviewCard>;

export default meta;

type Story = StoryObj<typeof PreviewCard>;

export const Primary: Story = {
  render: () => <PreviewCard />,
};
