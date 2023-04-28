import { useContext } from 'react';
import styled from 'styled-components';

import { CARD_COMPANY, imgSrc } from '../../constants/cardCompany';
import { CardPreviewInfoContext } from '../../contexts/cardInfo';

export function CardCompanyList() {
  const { company } = useContext(CardPreviewInfoContext);
  const clickedCompany = company.clicked;

  return (
    <Wrapper>
      {Object.entries(CARD_COMPANY).map(([key, value]) => (
        <Container key={key}>
          <_CompanyIcon
            id={key}
            src={imgSrc[value.name]}
            onClick={clickedCompany?.handleClick}
          />
          <_CompanyName>{value.name}</_CompanyName>
        </Container>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3rem;

  margin-left: 3rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const _CompanyIcon = styled.img`
  width: 5rem;
  height: 6.2rem;
`;

const _CompanyName = styled.p`
  color: black;
`;
