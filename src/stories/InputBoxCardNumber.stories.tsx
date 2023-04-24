import type { Meta } from "@storybook/react";

import InputBoxCardNumber from "../component/CardInputPage/InputBoxCardNumber/InputBoxCardNumber";

const meta: Meta = {
  title: "InputBoxCardNumber component",
  component: InputBoxCardNumber,
};

export default meta;

export const InputTest = () => (
  <InputBoxCardNumber setIsComplete={() => {}} setPreviewDataHandler={() => {}}></InputBoxCardNumber>
);
