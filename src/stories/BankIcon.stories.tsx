import { StoryFn } from "@storybook/react";
import { CompanySelect } from "../components/companySelectModal/CompanySelect";
import { kakaoLogo, shinhanLogo } from "../assets/card_company";
import { Company } from "../types/company";

export default {
  title: "CompanyIcon",
  component: CompanySelect,
};

const Template: StoryFn<typeof CompanySelect> = (args: {
  company: Company;
  selectCompany: (company: Company) => void;
}): React.ReactElement => <CompanySelect {...args} />;

export const KakaoBank = Template.bind({});

KakaoBank.args = {
  company: {
    name: "카카오카드",
    imgSrc: kakaoLogo,
    color: "blue",
  },
};

export const ShinhanBank = Template.bind({});

ShinhanBank.args = {
  company: {
    name: "신한은행",
    imgSrc: shinhanLogo,
    color: "green",
  },
};
