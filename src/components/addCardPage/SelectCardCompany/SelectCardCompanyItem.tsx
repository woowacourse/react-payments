import React from 'react';
import styled from 'styled-components';
import { CARD_COMPANY_DATA } from '../../../constants/constant';
import { CardCompanyType } from '../../../types/types';

interface SelectCardCompanyItemProps {
  kind: CardCompanyType;
  onCardCompanySelectClick: () => void;
}

export default function SelectCardCompanyItem({
  kind,
  onCardCompanySelectClick,
}: SelectCardCompanyItemProps) {
  return (
    <Wrapper onClick={onCardCompanySelectClick}>
      <Image src={CARD_COMPANY_DATA[kind].source} />
      <Title>{CARD_COMPANY_DATA[kind].title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
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
