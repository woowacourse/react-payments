import type { Meta, StoryObj } from "@storybook/react";
import FormSection from "./FormSection";
import { useState } from "react";

const meta = {
  title: "MyComponent/MyFormSection",
  component: FormSection,
  tags: ["autodocs"],
} satisfies Meta<typeof FormSection>;

export default meta;

type Story = StoryObj<typeof FormSection>;

export const Primary: Story = {
  args: {
    title: "결제할 카드 번호를 입력해 주세요",
    description: "본인 명의의 카드만 결제 가능합니다.",
    inputFieldData: {
      label: "카드번호",
      inputNumber: 4,
      inputProps: { placeholder: ["1234", "1234", "1234", "1234"], maxLength: 4 },
      cardInformation: { uniqueNumber: ["", "", "", ""], expirationDate: ["", ""], cvcNumber: [""] },
      informationType: "uniqueNumber",
      setCardInformation: () => {},
    },
  },
  render: (args: any) => {
    const [cardInformation, setCardInformation] = useState(args.cardInformation);
    return (
      <FormSection
        title={args.title}
        description={args.description}
        inputFieldData={{ ...args.inputFieldData, setCardInformation }}
      />
    );
  },
};
