import React from 'react';
import styled from 'styled-components';
import { BankType } from '../../types';
import { BANK_DATA } from '../../constant';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 37px;
  height: 37px;
  border-radius: 50%;
`;

const Title = styled.span`
  margin-top: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.085em;
  color: #525252;
`;

interface BankInfoProps {
  kind: BankType;
}

export default function BankInfo({ kind }: BankInfoProps) {
  return (
    <Wrapper>
      <Image src={BANK_DATA[kind].source} />
      <Title>{BANK_DATA[kind].title}</Title>
    </Wrapper>
  );
}
