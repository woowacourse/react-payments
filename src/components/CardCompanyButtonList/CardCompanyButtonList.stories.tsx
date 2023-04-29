import CardCompanyButtonList from "./CardCompanyButtonList";
import CARD_COMPANIES from "../../constants/cardCompanies";
import type { Meta, StoryObj } from "@storybook/react";
import type { CardCompany } from "../../types";

const meta: Meta<typeof CardCompanyButtonList> = {
  title: "CardCompanyButtonList",
  component: CardCompanyButtonList,
  tags: ["autodocs"],
  argTypes: {
    cardCompanies: {
      defaultValue: Object.keys(CARD_COMPANIES) as CardCompany[],
      description: "버튼으로 보여줄 카드사의 배열입니다.",
    },

    handleCardCompany: {
      description: `카드사를 인자로 하는 함수입니다. 자식 컴포넌트인 CardCompanyButton에게 전달됩니다.`,
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardCompanyButtonList>;

export const Default: Story = {
  render: ({ cardCompanies, handleCardCompany }) => {
    return <CardCompanyButtonList cardCompanies={cardCompanies} handleCardCompany={handleCardCompany} />;
  },
  args: {
    cardCompanies: Object.keys(CARD_COMPANIES) as CardCompany[],
    handleCardCompany: (company: CardCompany) => {},
  },
};
