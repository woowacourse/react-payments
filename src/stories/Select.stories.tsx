import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import Select from "../components/common/Select";

const CARD_COMPANIES = [
  { value: "BC", label: "BC카드" },
  { value: "sinhan", label: "신한카드" },
  { value: "kakaobank", label: "카카오뱅크" },
  { value: "hyundai", label: "현대카드" },
  { value: "woori", label: "우리카드" },
  { value: "lotte", label: "롯데카드" },
  { value: "hana", label: "하나카드" },
  { value: "kookmin", label: "국민카드" },
];

const meta = {
  title: "Select",
  component: Select,
  parameters: {
    layout: "padded",
  },
  args: {
    children: null,
  },
  render: ({ value: initialValue, onChange, ...args }) => {
    const [value, setValue] = useState(initialValue);
    return (
      <div style={{ width: "20rem" }}>
        <Select
          {...args}
          value={value}
          onChange={(next) => {
            setValue(next);
            onChange?.(next);
          }}
        >
          {CARD_COMPANIES.map((company) => (
            <Select.Option key={company.value} value={company.value}>
              {company.label}
            </Select.Option>
          ))}
        </Select>
      </div>
    );
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "카드사를 선택해 주세요",
    onChange: () => {},
  },
};
