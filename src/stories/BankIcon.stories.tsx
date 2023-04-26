import { StoryFn } from "@storybook/react";
import { CompanyIcon } from "../components/companySelectModal/CompanyIcon";
import { kakaoLogo, shinhanLogo } from "../assets/card_company";

export default {
  title: "CompanyIcon",
  component: CompanyIcon,
};

const Template: StoryFn<typeof CompanyIcon> = (args: {
  companyName: string;
  imgSrc: string;
}): React.ReactElement => <CompanyIcon {...args} />;

export const KakaoBank = Template.bind({});

KakaoBank.args = {
  companyName: "카카오뱅크",
  imgSrc: kakaoLogo,
};

export const ShinhanBank = Template.bind({});

ShinhanBank.args = {
  companyName: "신한은행",
  imgSrc: shinhanLogo,
};
