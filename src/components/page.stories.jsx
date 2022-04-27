import React from 'react';

import styled from 'styled-components';

import Button from './Button';
import Card from './Card';
import Input from './Input';
import { CardOwnerName } from './mixedComponents.stories';

export default {
  title: 'Example/Page',
  component: [Input, Button, Card],
  argTypes: {},
};

const StyledPage = styled.div`
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 375px;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 25px;
`;

const Title = styled.span`
  font-size: 16px;
  margin-left: 18px;
`;

const StyledCard = styled(Card)`
  align-self: center;
  margin-bottom: 25px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 19px;
`;

const CardOwnerNameLength = styled.div`
  color: #525252;
  font-size: 12px;
  left: 348px;
  position: absolute;
`;

const Bullet = styled.span`
  color: #04c09e;
  margin-right: 35px;
`;

const NextButton = styled(Button)`
  align-self: end;
`;

const PageTemplate = args => (
  <StyledPage>
    <Header>
      <Button {...args.arrow} />
      <Title>카드 추가</Title>
    </Header>
    <StyledCard {...args.card} />
    <InputGroup>
      <div>
        <Input {...args.cardNumber} />
      </div>
      <div>
        <Input {...args.validDate} />
      </div>
      <div>
        <CardOwnerNameLength>0/30</CardOwnerNameLength>
        <Input {...args.cardOwnerName} />
      </div>
      <div>
        <Input {...args.cvc.inputArgs} />
        <Button {...args.cvc.buttonArgs} />
      </div>
      <div>
        <Input {...args.cardPassword.labeled} />
        <Input {...args.cardPassword.noLabeled} />
        <Bullet>•</Bullet>
        <Bullet>•</Bullet>
      </div>
    </InputGroup>
    <NextButton {...args.text} />
  </StyledPage>
);

export const Page = PageTemplate.bind({});
Page.args = {
  arrow: {
    size: 'small',
    content: (
      <svg
        width="10"
        height="17"
        viewBox="0 0 10 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.30426 1L1.36476 8.78658L9.15134 15.7261"
          stroke="#525252"
          stroke-width="1.5"
        />
      </svg>
    ),
  },

  card: {
    bgColor: '#D2D2D2',
    size: 'medium',
  },

  cardNumber: {
    description: '카드 번호',
  },

  validDate: {
    description: '만료일',
    placeholder: 'MM / YY',
    width: '137px',
  },

  cardOwnerName: {
    description: '카드 소유자 이름 (선택)',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  },

  cvc: {
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
  },

  cardPassword: {
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
  },

  text: {
    color: '#04C09E',
    content: '다음',
    fontWeight: 'bold',
  },
};
