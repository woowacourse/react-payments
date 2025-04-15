import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
	title: "components/input",
	component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "1234",
	},
};

export const Error: Story = {
	args: {
		isError: true,
	},
};

