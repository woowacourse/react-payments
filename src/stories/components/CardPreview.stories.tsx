import { Meta, StoryObj } from "@storybook/react";
import CardPreviewComponent from "components/CardPreview";

const baseCardInfo = {
  number1: "1232",
  number2: "1312",
  number3: "3123",
  number4: "2131",
  month: "12",
  year: "31",
  name: "YUMMY",
  code: "123",
  password1: "1",
  password2: "2",
  nickname: "🥰",
};

const bc = { cardCompany: "BC카드", ...baseCardInfo };
const kb = { cardCompany: "국민카드", ...baseCardInfo };
const shinhan = { cardCompany: "신한카드", ...baseCardInfo };
const kakao = { cardCompany: "카카오뱅크", ...baseCardInfo };
const woori = { cardCompany: "우리카드", ...baseCardInfo };
const lotte = { cardCompany: "롯데카드", ...baseCardInfo };
const hana = { cardCompany: "하나카드", ...baseCardInfo };
const hyundai = { cardCompany: "현대카드", ...baseCardInfo };

const meta = {
  component: CardPreviewComponent,
  title: "Preview/CardPreview",
  tags: ["autodocs"],
} satisfies Meta<typeof CardPreviewComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardPreview: Story = {
  args: {
    cardInfo: {
      cardCompany: "현대카드",
      number1: "1232",
      number2: "1312",
      number3: "3123",
      number4: "2131",
      month: "12",
      year: "31",
      name: "YUMMY",
      code: "123",
      password1: "1",
      password2: "2",
      nickname: "🥰",
    },
  },

  argTypes: {
    cardInfo: {
      options: {
        BC카드: bc,
        국민카드: kb,
        신한카드: shinhan,
        카카오뱅크: kakao,
        우리카드: woori,
        롯데카드: lotte,
        하나카드: hana,
        현대카드: hyundai,
      },
      control: {
        type: "radio",
      },
    },
  },
};
