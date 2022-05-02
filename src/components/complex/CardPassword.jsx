import React from 'react';
import styled from 'styled-components';

import { Input } from '../common';

const Bullet = styled.span`
  color: #04c09e;
  margin-right: 35px;
`;

export default function CardPasswordInput({
  firstPassword,
  setFirstPassword,
  secondPassword,
  setSecondPassword,
}) {
  return (
    <div>
      <Input
        description="카드 비밀번호"
        margin={{ r: '7px' }}
        type="password"
        width="43px"
        value={firstPassword}
        maxLength={1}
        onChangeFunc={setFirstPassword}
      />
      <Input
        margin={{ r: '26px' }}
        type="password"
        width="43px"
        value={secondPassword}
        maxLength={1}
        onChangeFunc={setSecondPassword}
      />
      <Bullet>•</Bullet>
      <Bullet>•</Bullet>
    </div>
  );
}
