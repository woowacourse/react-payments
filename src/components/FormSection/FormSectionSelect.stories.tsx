import type { Meta, StoryObj } from "@storybook/react";
import FormSectionSelect from "./FormSectionSelect";
import { SelectFormSectionProps } from "../../types/componentPropsType";
import { useState } from "react";
import { CompanyType } from "../../types";

const meta = {
  title: "MyComponent/FormSectionSelect",
  component: FormSectionSelect,
} satisfies Meta<SelectFormSectionProps<"company">>;

export default meta;

type Story = StoryObj<SelectFormSectionProps<"company">>;

export const Default: Story = {
  args: {
    key: "company",
    title: "카드사를 선택해 주세요",
    description: "현재 국내 카드사만 가능합니다.",
    type: "select",
    fieldData: {
      options: ["BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드", "롯데카드", "하나카드", "국민카드"],
      placeholder: "카드사를 선택해주세요",
      setCardInformation: () => {},
    },
  },
  render: (args) => {
    const [cardInformation, setCardInformation] = useState<CompanyType>("");
    return (
      <FormSectionSelect<"company">
        {...args}
        fieldData={{
          ...args.fieldData,
          setCardInformation,
        }}
      />
    );
  },
};
