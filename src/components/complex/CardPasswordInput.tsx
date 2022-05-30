import { Input, InputContainer } from '..';

import { CardInfoContext } from 'contexts';
import styled from 'styled-components';

const Bullet = styled.span`
  color: #04c09e;
  margin-right: 35px;
`;

export default function CardPasswordInput() {
  return (
    <CardInfoContext.Consumer>
      {({
        firstPassword,
        setFirstPassword,
        secondPassword,
        setSecondPassword,
      }) => (
        <InputContainer>
          <Input
            description="카드 비밀번호"
            margin={{ r: '7px' }}
            id="firstPassword"
            type="password"
            width="43px"
            value={firstPassword}
            maxLength={1}
            onChangeFunc={setFirstPassword}
          />
          <Input
            margin={{ r: '26px' }}
            type="password"
            id="secondPassword"
            width="43px"
            value={secondPassword}
            maxLength={1}
            onChangeFunc={setSecondPassword}
          />
          <Bullet>•</Bullet>
          <Bullet>•</Bullet>
        </InputContainer>
      )}
    </CardInfoContext.Consumer>
  );
}
