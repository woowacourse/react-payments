import React from 'react';
import styled from 'styled-components';
import { type CardCompanyType } from '@type/card';
import { CARD_COMPANY_KIND } from '@constants/cardCompany';
import BankInfo from './SelectCardCompanyItem';

interface SelectCardCompanyProps {
  onCardCompanySelectClick: (value: CardCompanyType) => void;
}

export default function SelectCardCompany({
  onCardCompanySelectClick,
}: SelectCardCompanyProps) {
  return (
    <Wrapper>
      <GridWrapper>
        {CARD_COMPANY_KIND.map((company) => (
          <BankInfo
            key={company}
            kind={company}
            onCardCompanySelectClick={() => onCardCompanySelectClick(company)}
          />
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
  background-color: ${({ theme }) => theme.colors.white};
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 26px;
`;
