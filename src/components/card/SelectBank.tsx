import React from 'react';
import styled from 'styled-components';
import BankInfo from './BankInfo';
import { BankType } from '../../types';

const BANK_KIND: BankType[] = [
  'bc',
  'shinhan',
  'kakao',
  'hyundai',
  'woori',
  'lotte',
  'hana',
  'kb',
];

interface SelectBankProps {
  onClick: (value: BankType) => void;
}

export default function SelectBank({ onClick }: SelectBankProps) {
  return (
    <Wrapper>
      <GridWrapper>
        {BANK_KIND.map((bank) => (
          <BankInfo key={bank} kind={bank} onClick={() => onClick(bank)} />
        ))}
      </GridWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 375px;
  box-sizing: border-box;
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
