import styled from 'styled-components';
import { CompanyName as CompanyNameType, CompanyColor as CompanyColorType } from 'types/index';

interface CardCompanyButtonProps {
  color: CompanyColorType;
  name: CompanyNameType;
  handleClickCardCompany: (name: CompanyNameType, color: CompanyColorType) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const CompanyColor = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 18.5px;
  background-color: ${props => props.color};

  ${Container}:hover & {
    opacity: 0.6;
  }
`;

const CompanyName = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: ${({ theme }) => theme.PALETTE.GRAY_004};
`;

function CardCompanyButton({ color, name, handleClickCardCompany }: CardCompanyButtonProps) {
  return (
    <Container
      onClick={() => {
        handleClickCardCompany(name, color);
      }}
    >
      <CompanyColor color={color} />
      <CompanyName>{name}</CompanyName>
    </Container>
  );
}

export default CardCompanyButton;
