import { ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import InputBoxCardNumber from "../component/CardInputPage/InputBoxCardNumber/InputBoxCardNumber";

const meta: Meta = {
  title: "InputBoxCardNumber component",
  component: InputBoxCardNumber,
};

export default meta;

export const InputTest = (args: any) => (
  <InputBoxCardNumber setIsComplete={() => {}} setPreviewDataHandler={() => {}}></InputBoxCardNumber>
);
