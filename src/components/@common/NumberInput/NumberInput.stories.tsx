import type { Meta } from "@storybook/react";
import NumberInput from "./NumberInput";
import { useState } from "react";

const meta = {
  title: "NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
} satisfies Meta<typeof NumberInput>;

export default meta;

const createNumberInputStory =
  (maxLength: number, placeholder: string) => () => {
    const [value, setValue] = useState("");
    return (
      <NumberInput
        value={value}
        setValue={setValue}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    );
  };

export const CardNumber = createNumberInputStory(4, "1234");
export const CVCNumber = createNumberInputStory(3, "123");
export const ExpirationMonth = createNumberInputStory(2, "MM");
export const ExpirationYear = createNumberInputStory(2, "YY");
