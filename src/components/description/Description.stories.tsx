import type { Meta, StoryObj } from "@storybook/react";
import Description from "./Description";

const meta = {
	title: "components/description",
	component: Description,
} satisfies Meta<typeof Description>;

export default meta;

type Story = StoryObj<typeof Description>;

export const Default: Story = {
  args: {
		text: "본인 명의의 카드만 결제 가능합니다.",
	},
};

export const Error: Story = {
	args: {
		color: "#FF3D3D",
		text: "본인 명의의 카드만 결제 가능합니다.",
	},
};

