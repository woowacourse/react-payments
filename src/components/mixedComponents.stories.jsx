import React from 'react';

import styled from 'styled-components';

import Button from './Button';
import Input from './Input';

export default {
  title: 'Example/MixedComponents',
  component: [Input, Button],
  argTypes: {},
};

const StyledDiv = styled.div`
  color: #525252;
  font-size: 12px;
  position: absolute;
  left: 318px;
`;

const CardOwnerNameTemplate = args => (
  <>
    <StyledDiv>0/30</StyledDiv>
    <Input {...args} />
  </>
);

export const CardOwnerName = CardOwnerNameTemplate.bind({});
CardOwnerName.args = {
  description: '카드 소유자 이름 (선택)',
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
};

const CVCTemplate = args => (
  <>
    <Input {...args.inputArgs} />
    <Button {...args.buttonArgs} />
  </>
);

export const CVC = CVCTemplate.bind({});
CVC.args = {
  inputArgs: {
    description: '보안 코드(CVC/CVV)',
    type: 'password',
    width: '84px',
  },
  buttonArgs: {
    border: '1px solid #BABABA',
    color: '#969696',
    content: '?',
    margin: {
      l: '11px',
    },
    shape: 'circle',
    size: 'small',
  },
};

const StyledSpan = styled.span`
  color: #04c09e;
  margin-right: 35px;
`;

const CardPasswordTemplate = args => (
  <>
    <Input {...args.labeled} />
    <Input {...args.noLabeled} />
    <StyledSpan>•</StyledSpan>
    <StyledSpan>•</StyledSpan>
  </>
);

export const CardPassword = CardPasswordTemplate.bind({});
CardPassword.args = {
  labeled: {
    description: '카드 비밀번호',
    margin: {
      r: '7px',
    },
    type: 'password',
    width: '43px',
  },
  noLabeled: {
    margin: {
      r: '26px',
    },
    type: 'password',
    width: '43px',
  },
};
