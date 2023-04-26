import React from 'react';
import styled from 'styled-components';
import BankInfo from './BankInfo';

const Wrapper = styled.div`
  width: 100%;
  height: 227px;
  padding: 34px 50px;
  border-radius: 5px 5px 0px 0px;
  background-color: #fff;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 26px;
`;

export default function SelectBank() {
  return (
    <Wrapper>
      <GridWrapper>
        <BankInfo kind="bc" />
        <BankInfo kind="shinhan" />
        <BankInfo kind="kakao" />
        <BankInfo kind="hyundai" />
        <BankInfo kind="woori" />
        <BankInfo kind="lotte" />
        <BankInfo kind="hana" />
        <BankInfo kind="kb" />
      </GridWrapper>
    </Wrapper>
  );
}
