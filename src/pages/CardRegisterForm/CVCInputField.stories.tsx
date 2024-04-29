import { Meta, StoryObj } from "@storybook/react";
import CVCInputField from "./CVCInputField";
import useInput from "@/hooks/useInput";

const meta = {
  title: "CVCInputField",
  component: CVCInputField,
} satisfies Meta<typeof CVCInputField>;

export default meta;

type Story = StoryObj<typeof CVCInputField>;

const CVCInputFieldWithHook = () => {
  const inputStates = [useInput("")];
  return <CVCInputField inputStates={inputStates} />;
};

export const Default: Story = {
  render: () => <CVCInputFieldWithHook />,
};
