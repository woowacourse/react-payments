import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CARD_COMPANIES } from "../form/CardCompany";
import Select from "./Select";

const meta = {
	title: "components/select",
	component: Select,
	argTypes: {
		cardCompany: { control: false },
	},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
	args: {
		options: CARD_COMPANIES,
		cardCompany: "",
	},
	render: (args) => {
		const [selectedCompany, setSelectedCompany] = useState(args.cardCompany);

		return <Select options={args.options} cardCompany={selectedCompany} onChange={(value) => setSelectedCompany(value)} />;
	},
};
