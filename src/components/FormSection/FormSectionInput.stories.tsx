import type { Meta, StoryObj } from "@storybook/react";
import FormSectionInput from "./FormSectionInput";
import { useState } from "react";
import { InputFormSectionProps } from "../../types/componentPropsType";
import { UniqueNumberType } from "../../types/CardInformationType";

const meta = {
  title: "MyComponent/FormSectionInput",
  component: FormSectionInput,
} satisfies Meta<InputFormSectionProps<"uniqueNumber">>;

export default meta;

type Story = StoryObj<InputFormSectionProps<"uniqueNumber">>;

export const Default: Story = {
  args: {
    title: "결제할 카드 번호를 입력해 주세요",
    description: "본인 명의의 카드만 결제 가능합니다.",
    type: "input",
    key: "uniqueNumber",
    fieldData: {
      label: "카드번호",
      inputNumber: 4,
      inputProps: { placeholder: ["1234", "1234", "1234", "1234"], maxLength: 4 },
      state: ["", "", "", ""],
      setState: () => {},
      eachValidation: {
        isError: [false, false, false, false],
        errorMessage: "",
        validateInput: () => {},
      },
    },
  },
  render: (args) => {
    const [state, setState] = useState<UniqueNumberType>(["", "", "", ""]);
    return (
      <FormSectionInput<"uniqueNumber">
        {...args}
        fieldData={{
          ...args.fieldData,
          state,
          setState,
        }}
      />
    );
  },
};
