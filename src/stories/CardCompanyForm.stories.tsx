import { Meta, StoryObj } from "@storybook/react";
import CardCompanyForm from "../components/Form/CardCompanyForm";

const meta = {
  title: "CardCompanyForm",
  component: CardCompanyForm,
} satisfies Meta<typeof CardCompanyForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelContent: "",
    placeholders: ["카드사를 선택해주세요."],
    cardCompany: null,
    setCardCompany: () => {},
    onValidation: () => {},
    onFocus: () => {},
  },
};
