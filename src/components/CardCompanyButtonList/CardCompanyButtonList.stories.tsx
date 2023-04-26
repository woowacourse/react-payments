import type { Meta, StoryObj } from "@storybook/react";

import CardCompanyButtonList from "./CardCompanyButtonList";
import GlobalStyle from "../../styles/GlobalStyle";
import CARD_COMPANIES from "../../constants/cardCompanies";
import type { CardCompany } from "../../types";

const meta: Meta<typeof CardCompanyButtonList> = {
  title: "CardCompanyButtonList",
  component: CardCompanyButtonList,
};

export default meta;
type Story = StoryObj<typeof CardCompanyButtonList>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <GlobalStyle />
        <CardCompanyButtonList cardCompanies={Object.keys(CARD_COMPANIES) as CardCompany[]} />
      </>
    );
  },
};
