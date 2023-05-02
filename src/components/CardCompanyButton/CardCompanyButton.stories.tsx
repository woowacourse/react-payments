import CardCompanyButton from "./CardCompanyButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CardCompanyButton> = {
  title: "CardCompanyButton",
  component: CardCompanyButton,
  tags: ["autodocs"],
  argTypes: {
    cardCompany: {
      description: "카드사 옵션입니다.",
      defaultValue: "BC",
      control: "radio",
    },

    onClick: {
      action: "onClick",
      description: "버튼 클릭 이벤트 함수입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardCompanyButton>;

export const Default: Story = {
  render: ({ cardCompany, onClick }) => {
    return <CardCompanyButton cardCompany={cardCompany} onClick={onClick} />;
  },

  args: {
    cardCompany: "BC",
  },
};
