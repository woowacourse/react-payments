import React from 'react';

import Input from '../components/Input';

export default {
  title: 'Example/Input',
  component: Input,
};

function Template(args) {
  return <Input {...args} />;
}

export const CardNumber = Template.bind({});
CardNumber.args = {
  description: '카드 번호',
};

export const ValidDate = Template.bind({});
ValidDate.args = {
  description: '만료일',
  placeholder: 'MM / YY',
  width: '137px',
};

export const CardOwnerName = Template.bind({});
CardOwnerName.args = {
  description: '카드 소유자 이름 (선택)',
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
};

export const CVC = Template.bind({});
CVC.args = {
  description: '보안 코드(CVC/CVV)',
  type: 'password',
  width: '84px',
};

export const CardPasswordLabeled = Template.bind({});
CardPasswordLabeled.args = {
  description: '카드 비밀번호',
  type: 'password',
  width: '43px',
};

export const CardPasswordNoLabeled = Template.bind({});
CardPasswordNoLabeled.args = {
  type: 'password',
  width: '43px',
};
