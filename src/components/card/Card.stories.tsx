import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta = {
	title: "components/card",
	component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};
export const VisaCard: Story = {
	args: {
		cardNumbers: ["4123", "1234", "5678", "9123"],
	},
};
export const MasterCard: Story = {
	args: {
		cardNumbers: ["5512", "1234", "5678", "9123"],
	},
};
