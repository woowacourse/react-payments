import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";
import Input from "../Input/Input";

const meta = {
  title: "InputField",
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OneInputField: Story = {
  args: {
    label: "소유자 이름",
    children: <Input onChange={() => {}} placeholder="JADE" isError={false} />,
    errorMessages: [],
  },
};

export const OneInputFieldWithError: Story = {
  args: {
    label: "소유자 이름",
    children: <Input onChange={() => {}} placeholder="JADE" isError={true} />,
    errorMessages: ["유효한 이름이 아닙니다."],
  },
};

export const TwoInputField: Story = {
  args: {
    label: "유효기간",
    children: (
      <>
        <Input onChange={() => {}} placeholder="MM" isError={false} />
        <Input onChange={() => {}} placeholder="YY" isError={false} />
      </>
    ),
    errorMessages: [""],
  },
};

export const TwoInputFieldWithOneError: Story = {
  args: {
    label: "유효기간",
    children: (
      <>
        <Input onChange={() => {}} placeholder="MM" isError={true} />
        <Input onChange={() => {}} placeholder="YY" isError={false} />
      </>
    ),
    errorMessages: ["유효한 날짜가 아닙니다."],
  },
};

export const TwoInputFieldWithTwoError: Story = {
  args: {
    label: "유효기간",
    children: (
      <>
        <Input onChange={() => {}} placeholder="MM" isError={true} />
        <Input onChange={() => {}} placeholder="YY" isError={true} />
      </>
    ),
    errorMessages: ["유효한 날짜가 아닙니다."],
  },
};

export const FourInputField: Story = {
  args: {
    label: "카드 번호",
    children: (
      <>
        <Input onChange={() => {}} placeholder="1234" isError={false} />
        <Input onChange={() => {}} placeholder="1234" isError={false} />
        <Input onChange={() => {}} placeholder="1234" isError={false} />
        <Input onChange={() => {}} placeholder="1234" isError={false} />
      </>
    ),
    errorMessages: [""],
  },
};

export const FourInputFieldWithOneError: Story = {
  args: {
    label: "카드 번호",
    children: (
      <>
        <Input onChange={() => {}} placeholder="1234" isError={true} />
        <Input onChange={() => {}} placeholder="1234" isError={false} />
        <Input onChange={() => {}} placeholder="1234" isError={false} />
        <Input onChange={() => {}} placeholder="1234" isError={false} />
      </>
    ),
    errorMessages: ["유효한 카드 번호가 아닙니다."],
  },
};

export const FourInputFieldWithTwoError: Story = {
  args: {
    label: "카드 번호",
    children: (
      <>
        <Input onChange={() => {}} placeholder="1234" isError={true} />
        <Input onChange={() => {}} placeholder="1234" isError={false} />
        <Input onChange={() => {}} placeholder="1234" isError={false} />
        <Input onChange={() => {}} placeholder="1234" isError={true} />
      </>
    ),
    errorMessages: ["유효한 카드 번호가 아닙니다."],
  },
};
