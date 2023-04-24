import { ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import InputBoxExpirationDate from "../component/CardInputPage/InputBoxExpirationDate/InputBoxExpirationDate";

const meta: Meta = {
  title: "InputBoxExpirationDate component",
  component: InputBoxExpirationDate,
};

export default meta;

export const InputTest = (args: any) => (
  <InputBoxExpirationDate
    changeCardExpirationDateStatus={() => {}}
    changeNowCardInfo={() => {}}
  ></InputBoxExpirationDate>
);
