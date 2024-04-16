import type { Meta, StoryObj } from "@storybook/react";
import CreditCard from "../Components/CreditCard";

const meta = {
  title: "Components/CreditCard",
  component: CreditCard,
  argTypes: {
    cardInfo: {
      control: "object",
      description: "신용 카드 정보",
    },
  },
} satisfies Meta<typeof CreditCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "신용 카드 UI 기본값",
  args: { cardInfo: {} },
};

const dummyCardInfo: CardInfo = {
  cardNumbers: [5, 1, 2, 3, 4, 5, 7, 8, 9, 9, 9, 1, 0, 1, 2],
  cardValidityPeriod: { month: 9, year: 2025 },
  ownerName: "River",
};

export const MasterCard: Story = {
  name: "51~56 숫자로 시작하는 숫자라면 마스터 카드 이미지가 나와야 한다",
  args: {
    cardInfo: { ...dummyCardInfo, cardNumbers: [5, 1, 2, 3, 4, 5, 7, 8, 9, 9, 9, 1, 0, 1, 2] },
  },
};

export const VisaCard: Story = {
  name: "4 숫자로 시작하는 숫자라면 비자 카드 이미지가 나와야 한다",
  args: {
    cardInfo: { ...dummyCardInfo, cardNumbers: [4, 1, 2, 3, 4, 5, 7, 8, 9, 9, 9, 1, 0, 1, 2] },
  },
};

export const NoImageCard: Story = {
  name: "비자, 마스터카드가 아니면 이미지가 나오지 않는다.",
  args: {
    cardInfo: { ...dummyCardInfo, cardNumbers: [3, 1, 2, 3, 4, 5, 7, 8, 9, 9, 9, 1, 0, 1, 2] },
  },
};
