import type { Meta, StoryObj } from "@storybook/react";
import FormSection from "./FormSection";
import { useState } from "react";
import { FormSectionProps } from "../../types/componentPropsType";

const meta = {
  title: "MyComponent/MyFormSection",
  component: FormSection,
} satisfies Meta<FormSectionProps>;

export default meta;

type Story = StoryObj<FormSectionProps>;

export const Primary: Story = {
  args: {
    title: "결제할 카드 번호를 입력해 주세요",
    description: "본인 명의의 카드만 결제 가능합니다.",
    inputFieldData: {
      label: "카드번호",
      inputNumber: 4,
      inputProps: { placeholder: ["1234", "1234", "1234", "1234"], maxLength: 4 },
      cardInformation: { uniqueNumber: ["", "", "", ""], expirationDate: ["", ""], cvcNumber: [""], password: [""] },
      informationType: "uniqueNumber",
      setCardInformation: () => {},
      eachValidation: {
        isError: [false, false],
        errorMessage: "",
        validateInput: () => {},
      },
    },
  },
  render: (args) => {
    const [cardInformation, setCardInformation] = useState(args.inputFieldData.cardInformation);
    return (
      <FormSection
        title={args.title}
        description={args.description}
        inputFieldData={{ ...args.inputFieldData, setCardInformation }}
      />
    );
  },
};
