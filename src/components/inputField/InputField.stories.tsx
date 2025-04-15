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
    label:"유효기간",
    inputs:[
      <Input placeholder="MM"/>,
      <Input placeholder="YY"/>,
    ],
	},
};

export const Error: Story = {
  args: {
    label:"유효기간",
    inputs:[
      <Input placeholder="MM"/>,
      <Input placeholder="YY"/>,
    ],
    errorMessage:<Description text="숫자만 입력 가능합니다." color={COLORS.ERROR}/>
	},
};


