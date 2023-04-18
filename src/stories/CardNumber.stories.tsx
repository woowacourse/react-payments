import { ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardNumber from "../component/CardInputPage/InputBoxCardNumber/CardNumber";

const meta: Meta = {
  title: "CardNumber component",
  component: CardNumber,
};

export default meta;

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const target = e.target.value;
};

export const InputTest = (args: any) => <CardNumber></CardNumber>;
