import { Meta, StoryObj } from "@storybook/react";
import CardPreview from "../components/Card/CardPreview";

const meta = {
  title: "CardPreview",
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: ["1234", "5678", "9012", "3456"],
    expirationDate: ["12", "25"],
    cardOwner: ["JOHN DOE"],
    cardCompany:
      "BC카드 | 신한카드 | 카카오뱅크 | 현대카드 | 우리카드 | 롯데카드 | 하나카드 | 국민카드",
    cardCVC: ["123"],
    cardPassword: ["74"],
    focusedField: "cardCVC",
  },
};
