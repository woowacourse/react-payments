import type { Meta, StoryObj } from "@storybook/react";
import CardCompanyInput from "../../component/AddCardPage/CardDetailForm/CardCompanyInput/CardCompanyInput";

const meta = {
  component: CardCompanyInput,
  title: "Input",
} satisfies Meta<typeof CardCompanyInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardCompany: Story = {
  args: {},
};
