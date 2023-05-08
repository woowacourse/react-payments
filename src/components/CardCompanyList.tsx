import { useContext } from 'react';
import styled from 'styled-components';

import { CARD_COMPANY, imgSrc } from '../constants/cardCompany';
import { CardPreviewInfoContext } from '../contexts/cardPreviewInfoContext';

export function CardCompanyList() {
  const { company } = useContext(CardPreviewInfoContext);
  const clickedCompany = company.clicked;

  return (
    <_Wrapper>
      {Object.entries(CARD_COMPANY).map(([key, value]) => (
        <_Container key={key}>
          <_CompanyIcon
            id={key}
            src={imgSrc[value.name]}
            onClick={clickedCompany?.handleClick}
          />
          <_CompanyName>{value.name}</_CompanyName>
        </_Container>
      ))}
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem;

  margin-left: 0.6rem;
`;

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const _CompanyIcon = styled.img`
  width: 5rem;
  height: 6.2rem;
`;

const _CompanyName = styled.p`
  color: black;
  font: ${(props) => props.theme.text.caption};
  font-size: 1rem;
  text-align: center;
`;
