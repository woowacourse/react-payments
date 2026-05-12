import type { Meta, StoryObj } from "@storybook/react-vite";

import ValidatedInputGroup from "./ValidatedInputGroup";

const inputStyle = (isError = false) => ({
  width: 72,
  height: 32,
  border: `1px solid ${isError ? "#ff3d3d" : "#acacac"}`,
  borderRadius: 2,
  boxSizing: "border-box" as const,
  padding: "8px",
});

const renderInputs = ({
  values,
  placeholders,
  maxLength,
  errorIndex = -1,
}: {
  values: string[];
  placeholders: string[];
  maxLength: number;
  errorIndex?: number;
}) => (
  <>
    {values.map((value, index) => (
      <input
        key={index}
        aria-label={`입력 ${index + 1}`}
        defaultValue={value}
        maxLength={maxLength}
        placeholder={placeholders[index]}
        style={inputStyle(errorIndex === index)}
      />
    ))}
  </>
);

const meta = {
  title: "Components/Common/ValidatedInputGroup",
  component: ValidatedInputGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    errorMessage: "",
    legend: "카드 번호",
    children: renderInputs({
      values: ["", "", "", ""],
      placeholders: ["1234", "1234", "1234", "1234"],
      maxLength: 4,
    }),
  },
} satisfies Meta<typeof ValidatedInputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumberInputs: Story = {};

export const ExpiryDateInputs: Story = {
  args: {
    legend: "유효기간",
    children: renderInputs({
      values: ["08", "29"],
      placeholders: ["MM", "YY"],
      maxLength: 2,
    }),
  },
};

export const CvcInput: Story = {
  args: {
    legend: "CVC",
    children: renderInputs({
      values: [""],
      placeholders: ["123"],
      maxLength: 3,
    }),
  },
};

export const ErrorState: Story = {
  args: {
    errorMessage: "숫자만 입력 가능합니다",
    children: renderInputs({
      values: ["12ab", "", "", ""],
      placeholders: ["1234", "1234", "1234", "1234"],
      maxLength: 4,
      errorIndex: 0,
    }),
  },
};

export const WarningState: Story = {
  args: {
    warningMessage: "지원하지 않는 카드입니다",
  },
};
