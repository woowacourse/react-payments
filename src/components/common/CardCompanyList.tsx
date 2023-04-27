import styled from 'styled-components';

import { CARD_COMPANY } from '../../constants';
import { imgSrc } from '../../utils/imageSrc';

export function CardCompanyList() {
  function handleClickLogo(e: React.MouseEvent<HTMLImageElement>) {
    if (e.target instanceof HTMLImageElement) alert(e.target.id);
  }

  return (
    <Wrapper>
      {Object.entries(CARD_COMPANY).map(([key, value]) => (
        <>
          <Container>
            <_CompanyIcon
              id={key}
              key={key}
              src={imgSrc[value]}
              onClick={handleClickLogo}
            />
            <_CompanyName>{value}</_CompanyName>
          </Container>
        </>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3.5rem;
  margin: 0rem 0rem 3rem 3.2rem;
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
