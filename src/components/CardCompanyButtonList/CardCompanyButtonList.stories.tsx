import CardCompanyButtonList from "./CardCompanyButtonList";
import type { Meta, StoryObj } from "@storybook/react";
import type { CardCompany } from "../../types";

const meta: Meta<typeof CardCompanyButtonList> = {
  title: "CardCompanyButtonList",
  component: CardCompanyButtonList,
  tags: ["autodocs"],
  argTypes: {
    handleCardCompany: {
      description: `카드사를 인자로 하는 함수입니다. 자식 컴포넌트인 CardCompanyButton에게 전달됩니다.`,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardCompanyButtonList>;

export const Default: Story = {
  render: ({ handleCardCompany }) => {
    return <CardCompanyButtonList handleCardCompany={handleCardCompany} />;
  },
  args: {
    handleCardCompany: (company: CardCompany) => {},
  },
};
