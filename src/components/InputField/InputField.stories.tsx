import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta = {
  title: "InputField",
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <InputField.Label>소유자 이름</InputField.Label>
        <InputField.Inputs>
          <InputField.Input onChange={() => {}} placeholder="JADE" isError={false} />
        </InputField.Inputs>
        <InputField.ErrorMessage>유효한 이름이 아닙니다.</InputField.ErrorMessage>
      </>
    ),
  },
};

export const TwoInput: Story = {
  args: {
    children: (
      <>
        <InputField.Label>카드 번호</InputField.Label>
        <InputField.Inputs>
          <InputField.Input onChange={() => {}} placeholder="MM" isError={false} />
          <InputField.Input onChange={() => {}} placeholder="YY" isError={false} />
        </InputField.Inputs>
        <InputField.ErrorMessage>유용한 카드번호가 아닙니다.</InputField.ErrorMessage>
      </>
    ),
  },
};

export const FourInput: Story = {
  args: {
    children: (
      <>
        <InputField.Label>카드 번호</InputField.Label>
        <InputField.Inputs>
          <InputField.Input onChange={() => {}} placeholder="1234" isError={false} />
          <InputField.Input onChange={() => {}} placeholder="1234" isError={false} />
          <InputField.Input onChange={() => {}} placeholder="1234" isError={false} />
          <InputField.Input onChange={() => {}} placeholder="1234" isError={false} />
        </InputField.Inputs>
        <InputField.ErrorMessage>유용한 카드번호가 아닙니다.</InputField.ErrorMessage>
      </>
    ),
  },
};

export const SelectInputField: Story = {
  args: {
    children: (
      <>
        <InputField.Label>소유자 이름</InputField.Label>
        <InputField.Inputs>
          <InputField.Select>
            <option>옵션 1</option>
            <option>옵션 2</option>
            <option>옵션 3</option>
            <option>옵션 4</option>
          </InputField.Select>
        </InputField.Inputs>
        <InputField.ErrorMessage>유효한 이름이 아닙니다.</InputField.ErrorMessage>
      </>
    ),
  },
};
