import { Meta, StoryObj } from "@storybook/react";
import CVCInputField from "./CVCInputField";
import useInput from "@/hooks/useInput";
import { INPUT_COUNTS } from "@/constants/condition";

const meta = {
  title: "CVCInputField",
  component: CVCInputField,
} satisfies Meta<typeof CVCInputField>;

export default meta;

type Story = StoryObj<typeof CVCInputField>;

const CVCInputFieldWithHook = () => {
  const reduceds = Array.from({ length: INPUT_COUNTS.OWNER_NAME }).map(() => useInput(""));
  return <CVCInputField reduceds={reduceds} />;
};

export const Default: Story = {
  render: () => <CVCInputFieldWithHook />,
};
