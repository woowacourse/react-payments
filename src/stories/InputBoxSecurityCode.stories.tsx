import { ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import InputBoxSecurityCode from "../component/CardInputPage/InputBoxSecurityCode/InputBoxSecurityCode";

const meta: Meta = {
  title: "InputBoxSecurityCode component",
  component: InputBoxSecurityCode,
};

export default meta;

export const InputTest = (args: any) => (
  <InputBoxSecurityCode setIsComplete={() => {}}></InputBoxSecurityCode>
);
