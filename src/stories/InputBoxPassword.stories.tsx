import { ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import InputBoxPassword from "../component/CardInputPage/InputBoxPassword/InputBoxPassword";

const meta: Meta = {
  title: "InputBoxPassword component",
  component: InputBoxPassword,
};

export default meta;

export const InputTest = (args: any) => (
  <InputBoxPassword setIsComplete={() => {}}></InputBoxPassword>
);
