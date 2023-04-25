/* eslint-disable react/function-component-definition */

import { Meta, Story } from '@storybook/react';

import CardCompany, { CardCompanyType } from '.';

export default {
  title: 'CardCompany',
  component: CardCompany,
} as Meta;

const Template: Story<CardCompanyType> = (args) => <CardCompany {...args} />;

export const BCCardCompany = Template.bind({});
BCCardCompany.args = {
  company: 'bc',
};

export const KakaoCardCompany = Template.bind({});
KakaoCardCompany.args = {
  company: 'kakao',
};

export const ShinhanCardCompany = Template.bind({});
ShinhanCardCompany.args = {
  company: 'shinhan',
};

export const HanaCardCompany = Template.bind({});
HanaCardCompany.args = {
  company: 'hana',
};

export const HyundaiCardCompany = Template.bind({});
HyundaiCardCompany.args = {
  company: 'hyundai',
};

export const KBCardCompany = Template.bind({});
KBCardCompany.args = {
  company: 'kb',
};

export const LotteCardCompany = Template.bind({});
LotteCardCompany.args = {
  company: 'lotte',
};

export const WooriCardCompany = Template.bind({});
WooriCardCompany.args = {
  company: 'woori',
};
