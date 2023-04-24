import type { Meta } from "@storybook/react";

import InputBoxSecurityCode from "../component/CardInputPage/InputBoxSecurityCode/InputBoxSecurityCode";

const meta: Meta = {
  title: "InputBoxSecurityCode component",
  component: InputBoxSecurityCode,
};

export default meta;

export const InputTest = (args: any) => (
  <InputBoxSecurityCode setIsComplete={() => {}}></InputBoxSecurityCode>
);
