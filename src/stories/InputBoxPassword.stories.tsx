import type { Meta } from "@storybook/react";

import InputBoxPassword from "../component/CardInputPage/InputBoxPassword/InputBoxPassword";

const meta: Meta = {
  title: "InputBoxPassword component",
  component: InputBoxPassword,
};

export default meta;

export const InputTest = (args: any) => (
  <InputBoxPassword changePasswordStatus={() => {}}></InputBoxPassword>
);
