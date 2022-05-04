import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  gap: 10px;
`;

const CompanyColor = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 18.5px;
  background-color: ${props => props.color};
`;

const CompanyName = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: #525252;
`;

function CardCompanyButton({ color, name }) {
  return (
    <Container>
      <CompanyColor color={color} />
      <CompanyName>{name}</CompanyName>
    </Container>
  );
}

export default CardCompanyButton;
