import type { Meta, StoryObj } from "@storybook/react";
import useInput from "../hooks/useInput";

function Input({ placeholder }: { placeholder: string }) {
  const { value, onChangeHandler } = useInput({
    validator: () => {},
    errorHandler: () => {},
  });

  return (
    <input value={value} onChange={onChangeHandler} placeholder={placeholder} />
  );
}

const meta = {
  title: "Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    placeholder: "1234",
  },
};
