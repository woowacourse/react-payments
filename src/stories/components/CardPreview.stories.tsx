import { Meta, StoryObj } from "@storybook/react";
import CardPreviewComponent from "../../components/CardPreview";

const meta = {
  component: CardPreviewComponent,
  title: "Preview/CardPreview",
} satisfies Meta<typeof CardPreviewComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardPreview: Story = {
  args: {
    cardInfo: {
      cardCompany: "현대카드",
      number1: "1234",
      number2: "1234",
      number3: "1234",
      number4: "1234",
      month: "02",
      year: "24",
      name: "YUMMY",
      code: "",
      password1: "",
      password2: "",
    },
  },
};
