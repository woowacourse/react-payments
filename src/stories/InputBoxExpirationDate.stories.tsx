import type { Meta } from "@storybook/react";

import InputBoxExpirationDate from "../component/CardInputPage/InputBoxExpirationDate/InputBoxExpirationDate";

const meta: Meta = {
  title: "InputBoxExpirationDate component",
  component: InputBoxExpirationDate,
};

export default meta;

export const InputTest = () => (
  <InputBoxExpirationDate setIsComplete={() => {}} setPreviewDataHandler={() => {}}></InputBoxExpirationDate>
);
