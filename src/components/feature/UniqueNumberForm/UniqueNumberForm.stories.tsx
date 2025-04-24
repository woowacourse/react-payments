import type { Meta, StoryObj } from "@storybook/react";
import UniqueNumberForm from "./UniqueNumberForm";

const meta = {
  title: "MyComponent/UniqueNumberForm",
  component: UniqueNumberForm,
  tags: ["autodocs"],
} satisfies Meta<typeof UniqueNumberForm>;

export default meta;

type Story = StoryObj<typeof UniqueNumberForm>;

export const Primary: Story = {
  render: () => <UniqueNumberForm uniqueNumberState={["", "", "", ""]} dispatch={() => {}} />,
};
