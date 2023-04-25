/* eslint-disable react/function-component-definition */

import { Meta, Story } from '@storybook/react';

import CardCompany, { CardCompanyType } from '..';

export default {
  title: 'CardCompany',
  component: CardCompany,
} as Meta;

const Template: Story<CardCompanyType> = (args) => <CardCompany {...args} />;

export const BCCardCompany = Template.bind({});
BCCardCompany.args = {
  company: 'BC',
};

export const KakaoCardCompany = Template.bind({});
KakaoCardCompany.args = {
  company: 'KAKAO',
};

export const ShinhanCardCompany = Template.bind({});
ShinhanCardCompany.args = {
  company: 'SHINHAN',
};

export const HanaCardCompany = Template.bind({});
HanaCardCompany.args = {
  company: 'HANA',
};

export const HyundaiCardCompany = Template.bind({});
HyundaiCardCompany.args = {
  company: 'HYUNDAI',
};

export const KBCardCompany = Template.bind({});
KBCardCompany.args = {
  company: 'KB',
};

export const LotteCardCompany = Template.bind({});
LotteCardCompany.args = {
  company: 'LOTTE',
};

export const WooriCardCompany = Template.bind({});
WooriCardCompany.args = {
  company: 'WOORI',
};
