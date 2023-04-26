import styled from "styled-components";
import { CardCompany } from "../../types";
import CARD_COMPANIES from "../../constants/cardCompanies";

type CardCompanyButtonProps = {
  cardCompany: CardCompany;
  onClick: () => void;
};

const CardCompanyButton = ({ cardCompany, onClick }: CardCompanyButtonProps) => {
  return (
    <Button type="button" onClick={onClick}>
      <CompanyLogo src={CARD_COMPANIES[cardCompany].logoFilePath} alt="card-company" />
      <CompanyName>{CARD_COMPANIES[cardCompany].koreanName}</CompanyName>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 60px;
  height: 64px;

  border: none;
  background-color: transparent;

  cursor: pointer;
`;

const CompanyLogo = styled.img`
  width: 38px;
  height: 38px;

  transition: transform 100ms ease;

  &:hover {
    transform: scale(1.15);
  }
`;

const CompanyName = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-align: center;
`;

export default CardCompanyButton;
