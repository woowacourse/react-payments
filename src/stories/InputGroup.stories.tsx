import type { Meta, StoryObj } from "@storybook/react";

import InputGroup from "../components/common/InputGroup";
import InputBox from "../components/common/InputBox";
import Input from "../components/common/Input";

interface InputGroupProps {
  placeholder?: string;
  labelValue?: string;
  errorMessage?: string;
}
const SingleInputGroup = ({ placeholder, labelValue, errorMessage }: InputGroupProps) => {
  return (
    <InputGroup labelValue={labelValue} errorMessage={errorMessage}>
      <InputBox>
        <Input placeholder={placeholder} />
      </InputBox>
    </InputGroup>
  );
};

const meta = {
  title: "Payment/Common",
  component: SingleInputGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof SingleInputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    placeholder: "",
  },
};

export const InputWithLabel: Story = {
  args: {
    placeholder: "",
    labelValue: "라벨 값",
  },
};

export const InputWithErrorMessage: Story = {
  args: {
    placeholder: "",
    errorMessage: "에러가 발생했습니다.",
  },
};

export const InputWithLabelAndErrorMessage: Story = {
  args: {
    placeholder: "",
    labelValue: "라벨 값",
    errorMessage: "에러가 발생했습니다.",
  },
};
