import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardNumber from "../component/CardInputPage/InputBoxCardNumber/CardNumber";

const meta: Meta = {
  title: "CardNumber component",
  component: CardNumber,
};

export default meta;

export const InputTest = (args: any) => (
  <CardNumber
    setHasError={() => {}}
    changeCardNumberStatus={() => {}}
    changeNowCardInfo={() => {}}
  ></CardNumber>
);
