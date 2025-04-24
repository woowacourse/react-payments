import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";
import Input from "../input/Input";
import Description from "../description/Description";
import { COLORS } from "../../styles/colors";

const meta = {
	title: "components/inputField",
	component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
	args: {
		label: "유효기간",
	},
	render: (args) => {
		const inputs = [<Input placeholder="MM" value="" onChange={() => {}} />, <Input placeholder="YY" value="" onChange={() => {}} />];
		return <InputField label={args.label}>{inputs}</InputField>;
	},
};

export const Error: Story = {
	args: {
		label: "유효기간",
		errorMessage: <Description color={COLORS.ERROR}>숫자만 입력 가능합니다.</Description>,
	},
	render: (args) => {
		const inputs = [<Input placeholder="MM" value="" onChange={() => {}} isError={true} />, <Input placeholder="YY" value="" onChange={() => {}} />];
		return <InputField label={args.label}>{inputs}</InputField>;
	},
};
