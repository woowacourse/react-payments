import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta = {
  title: "components/Input",
  component: Input,
};

export default meta;

type InputProps = {
  value: string;
  isError: boolean;
};

export const DefaultInput: StoryObj<InputProps> = (args: any) => (
  <Input {...args} />
);

DefaultInput.args = {
  value: "안녕하세요",
  isError: false,
};

export const ErrorInput: StoryObj<InputProps> = (args: any) => (
  <Input {...args} />
);

ErrorInput.args = {
  value: "이건 에러",
  isError: true,
};
