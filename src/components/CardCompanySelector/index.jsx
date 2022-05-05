import styled, { keyframes } from 'styled-components';
import CardCompanyButton from '../CardCompanyButton';

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

const cardCompanyList = [
  { name: '포코카드', color: '#E24141' },
  { name: '준카드', color: '#547CE4' },
  { name: '공원카드', color: '#73BC6D' },
  { name: '브랜카드', color: '#DE59B9' },
  { name: '로이드카드', color: '#4CD2BA' },
  { name: '도비카드', color: '#E76E9A' },
  { name: '콜린카드', color: '#F37D3B' },
  { name: '썬카드', color: '#FBCD58' },
];

function CardCompanySelector({ handleClickCardCompany }) {
  return (
    <Container>
      {cardCompanyList.map((cardCompany, index) => (
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
