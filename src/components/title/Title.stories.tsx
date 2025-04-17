import type { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";

const meta = {
	title: "components/title",
	component: Title,
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
	args: {
		children: "결제할 카드 번호를 입력해 주세요",
	},
};
