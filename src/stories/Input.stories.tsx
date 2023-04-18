import { ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Input from "../component/common/Input";

const meta: Meta = {
  title: "Input common component",
  component: Input,
};

export default meta;

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const target = e.target.value;
};

export const InputTest = (args: any) => (
  <Input type="text" onChange={handleChange} value="실험용"></Input>
);
