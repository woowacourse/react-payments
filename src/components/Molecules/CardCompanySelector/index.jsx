import styled, { keyframes } from 'styled-components';
import CardCompanyButton from 'components/Atoms/CardCompanyButton';
import { CARD_COMPANY_LIST } from 'constant/cardCompany';

const slideIn = keyframes`
  from {
    bottom: -50%;
  }
  to {
    bottom: 0%;
  }
`;

const Container = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  column-gap: 26px;
  width: 100%;
  height: 237px;
  padding: 34px 52px;
  border-radius: 5px 5px 0px 0px;
  background: #fdfdfd;
  animation: ${slideIn} 0.3s linear;
`;

function CardCompanySelector({ handleClickCardCompany }) {
  return (
    <Container>
      {CARD_COMPANY_LIST.map((cardCompany, index) => (
        <CardCompanyButton
          key={cardCompany.name + index}
          name={cardCompany.name}
          color={cardCompany.color}
          handleClickCardCompany={handleClickCardCompany}
          {...cardCompany}
        />
      ))}
    </Container>
  );
}

export default CardCompanySelector;
