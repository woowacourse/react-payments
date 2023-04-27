import { StoryFn } from "@storybook/react";
import { CompanyIcon } from "../components/companySelectModal/CompanyIcon";
import { kakaoLogo, shinhanLogo } from "../assets/card_company";
import { Company } from "../types/company";

export default {
  title: "CompanyIcon",
  component: CompanyIcon,
};

const Template: StoryFn<typeof CompanyIcon> = (args: {
  company: Company;
  handleClick: (company: Company) => void;
}): React.ReactElement => <CompanyIcon {...args} />;

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
