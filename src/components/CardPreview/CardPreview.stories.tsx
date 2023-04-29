import { Meta, StoryObj } from "@storybook/react";
import CardPreview from "./CardPreview";

const meta: Meta<typeof CardPreview> = {
  title: "CardPreview",
  component: CardPreview,
  tags: ["autodocs"],
  argTypes: {
    card: {
      description: "카드 미리보기에 필요한 정보가 담긴 카드 객체입니다. ",
    },

    onClick: {
      description: "카드 미리보기 클릭시 이벤트에 사용될 함수입니다.",
    },
  },

  args: {
    card: {
      cardNumber: {
        firstGroup: "1234",
        secondGroup: "1234",
        thirdGroup: "1234",
        fourthGroup: "1234",
      },
      expirationDate: {
        month: "12",
        year: "12",
      },
      ownerName: "aaa",
      cardCompany: "BC",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  render: ({ card }) => {
    return <CardPreview card={card} />;
  },
};
