import type { Meta } from "@storybook/react";

import InputBoxOwner from "../component/CardInputPage/InputBoxOwner/InputBoxOwner";

const meta: Meta = {
  title: "InputBoxOwner component",
  component: InputBoxOwner,
};

export default meta;

export const InputTest = () => (
  <InputBoxOwner setPreviewDataHandler={() => {}}></InputBoxOwner>
);
