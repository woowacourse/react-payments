import React from 'react';
import Input from '../index';
import * as Styled from './index.styled';

interface Props {
  expiredMonth: string;
  expiredYear: string;
  onChangeExpiredMonth: () => void;
  onChangeExpiredYear: () => void;
}

const ExpiredDateInput = ({
  expiredMonth,
  expiredYear,
  onChangeExpiredMonth,
  onChangeExpiredYear,
}: Props) => {
  return (
    <Styled.Container>
      <Input
        scale="medium"
        placeholder={'MM'}
        maxLength={2}
        value={expiredMonth}
        onChange={onChangeExpiredMonth}
        data-testid="expired-month-input"
      />
      <Styled.SlashContainer>/</Styled.SlashContainer>
      <Input
        scale="medium"
        placeholder={'YY'}
        maxLength={2}
        value={expiredYear}
        onChange={onChangeExpiredYear}
        data-testid="expired-year-input"
      />
    </Styled.Container>
  );
};

export default ExpiredDateInput;
