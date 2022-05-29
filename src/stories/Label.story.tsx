import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardFormLabel from 'components/card/CardFormLabel';

export default {
  title: 'Component/Label',
  component: CardFormLabel,
} as ComponentMeta<typeof CardFormLabel>;

const NumberTemplate: ComponentStory<typeof CardFormLabel> = () => (
  <CardFormLabel>카드 번호</CardFormLabel>
);

const ExpiredPeriodTemplate: ComponentStory<typeof CardFormLabel> = () => (
  <CardFormLabel>만료일</CardFormLabel>
);

const OwnerNameTemplate: ComponentStory<typeof CardFormLabel> = () => (
  <CardFormLabel>카드 소유자 이름(선택)</CardFormLabel>
);

const CvcTemplate: ComponentStory<typeof CardFormLabel> = () => (
  <CardFormLabel>보안 코드(CVC/CVV)</CardFormLabel>
);

const PasswordTemplate: ComponentStory<typeof CardFormLabel> = () => (
  <CardFormLabel>카드 비밀번호</CardFormLabel>
);

export const Number = NumberTemplate.bind({});
export const ExpiredPeriod = ExpiredPeriodTemplate.bind({});
export const OwnerName = OwnerNameTemplate.bind({});
export const CVC = CvcTemplate.bind({});
export const Password = PasswordTemplate.bind({});
