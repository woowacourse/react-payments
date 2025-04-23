import { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta = {
  title: "Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "100%",
    onChange: () => alert("Input changed"),
    value: "string",
    isError: false,
    options: [
      { value: "", label: "카드사를 선택해주세요" },
      { value: "비자", label: "비자" },
      { value: "마스터카드", label: "마스터카드" },
      { value: "아멕스", label: "아멕스" },
    ],
  },
};
