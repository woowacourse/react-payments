import { Meta, StoryObj } from "@storybook/react";
import CardCompanyComponent from "../../components/CardCompany";
import { CARD_COMPANIES } from "constants/cardCompanies";

const meta = {
  component: CardCompanyComponent,
  title: "Components/CardCompany",
  tags: ["autodocs"],
  argTypes: {
    cardCompanyName: {
      options: Object.keys(CARD_COMPANIES).map((company) => company),
      control: {
        type: "select",
      },
      description:
        "카드사를 선택하면 해당 카드사의 로고와 이름을 볼 수 있습니다.",
    },
  },
} satisfies Meta<typeof CardCompanyComponent>;

export default meta;

type Story = StoryObj<typeof CardCompanyComponent>;

export const BcCard: Story = {
  args: {
    cardCompanyName: "BC카드",
  },
};

export const ShinhanCard: Story = {
  args: {
    cardCompanyName: "신한카드",
  },
};

export const KakaoCard: Story = {
  args: {
    cardCompanyName: "카카오뱅크",
  },
};

export const HyundaiCard: Story = {
  args: {
    cardCompanyName: "현대카드",
  },
};

export const WooriCard: Story = {
  args: {
    cardCompanyName: "우리카드",
  },
};

export const LotteCard: Story = {
  args: {
    cardCompanyName: "롯데카드",
  },
};

export const HanaCard: Story = {
  args: {
    cardCompanyName: "하나카드",
  },
};

export const KbCard: Story = {
  args: {
    cardCompanyName: "국민카드",
  },
};
