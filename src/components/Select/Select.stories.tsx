import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Select from "./Select";
import { CardInformationType } from "../../types/CardInformationType";
import { SelectProps } from "../../types/componentPropsType";

const meta = {
  title: "MyComponent/MySelect",
  component: Select,
} satisfies Meta<SelectProps>;

export default meta;

type Story = StoryObj<SelectProps>;

export const Primary: Story = {
  args: {
    options: ["BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드", "롯데카드", "하나카드", "국민카드"],
    placeholder: "카드사를 선택해주세요",
  },
  render: (args) => {
    const [value, setCardInformation] = useState<CardInformationType>({
      uniqueNumber: ["", "", "", ""],
      expirationDate: ["", ""],
      cvcNumber: [""],
      password: [""],
    });

    return <Select options={args.options} placeholder={args.placeholder} setCardInformation={setCardInformation} />;
  },
};
