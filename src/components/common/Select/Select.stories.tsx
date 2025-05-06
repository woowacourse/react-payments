import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import { useState } from "react";

const meta = {
  title: "MyComponent/MySelect",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Basic: Story = {
  args: {
    optionList: ["BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드", "롯데카드", "하나카드", "국민카드"],
  },

  render: (args: any) => {
    const [value, setValue] = useState<string | null>(null);
    return <Select optionList={args.optionList} setValue={setValue} value={value} />;
  },
};
