import type { Meta } from "@storybook/react";

import Input from "../component/common/Input";

const meta: Meta = {
  title: "Input common component",
  component: Input,
};

export default meta;

export const InputTest = (args: any) => (
  <Input type="text" onChange={() => {}} placeholder="실험용"></Input>
);
