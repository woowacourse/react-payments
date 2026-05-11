import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import SelectField from "../components/common/SelectField";

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
  title: "SelectField",
  component: SelectField,
  parameters: {
    layout: "padded",
  },
  render: ({ value: initialValue, onChange, ...args }) => {
    const [value, setValue] = useState(initialValue);
    return (
      <div style={{ width: "20rem" }}>
        <SelectField
          {...args}
          value={value}
          onChange={(next) => {
            setValue(next);
            onChange?.(next);
          }}
        />
      </div>
    );
  },
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "카드사",
    caption: "카드사를 선택해 주세요.",
    value: "",
    placeholder: "카드사를 선택해 주세요",
    options: CARD_COMPANIES,
    onChange: () => {},
  },
};

export const WithHelperMessage: Story = {
  args: {
    title: "카드사",
    caption: "카드사를 선택해 주세요.",
    helperMessage: "카드사를 반드시 선택해야 합니다.",
    value: "",
    placeholder: "카드사를 선택해 주세요",
    options: CARD_COMPANIES,
    onChange: () => {},
  },
};

export const WithSelectedValue: Story = {
  args: {
    title: "카드사",
    caption: "카드사를 선택해 주세요.",
    value: "BC",
    placeholder: "카드사를 선택해 주세요",
    options: CARD_COMPANIES,
    onChange: () => {},
  },
};

export const WithoutCaption: Story = {
  args: {
    title: "카드사",
    value: "",
    placeholder: "카드사를 선택해 주세요",
    options: CARD_COMPANIES,
    onChange: () => {},
  },
};
