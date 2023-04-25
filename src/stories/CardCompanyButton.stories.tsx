import type { Meta } from "@storybook/react";

import { getCardCompanies } from "../type/CardCompany";
import CardCompanyButton from "../component/CardInputPage/InputModalBank/CardCompanyButton";

const meta: Meta<typeof CardCompanyButton>= {
  title: "Card Company Button",
  component: CardCompanyButton,
  argTypes: {
    companyName: {
      options: getCardCompanies(),
      control: { type: 'inline-radio' },
    },
    onClick: {
      action: 'Clicked!!',
    },
  },
};

export default meta;

export const Icons = (args: any) => (
  <CardCompanyButton
    companyName={args.companyName ?? 'bc'}
    onClick={args.onClick}
  />
);
