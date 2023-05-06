import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import LastPage from "pages/LastPage";
import { CARD_COMPANIES } from "constants/cardCompanies";

const baseCardInfo = {
  code: "123",
  month: "12",
  name: "",
  nickname: "🥰",
  number1: "1232",
  number2: "1312",
  number3: "3123",
  number4: "2131",
  password1: "1",
  password2: "2",
  year: "31",
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
  component: LastPage,
  title: "Pages/LastPage",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div id="root">
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],

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
      cardCompany: {
        options: Object.keys(CARD_COMPANIES).map((company) => company),
      },
      control: {
        type: "radio",
      },
      description: "카드사를 선택해 카드를 변경할 수 있습니다.",
    },
  },
} satisfies Meta<typeof LastPage>;

export default meta;

type Story = StoryObj<typeof LastPage>;

export const CardNicknameSetting: Story = {
  args: {
    cardInfo: {
      cardCompany: "국민카드",
      code: "123",
      month: "12",
      name: "",
      nickname: "🥰",
      number1: "1232",
      number2: "1312",
      number3: "3123",
      number4: "2131",
      password1: "1",
      password2: "2",
      year: "31",
    },
  },
};
