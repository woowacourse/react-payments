import styled from "styled-components";
import { CardCompany } from "../../types";
import CARD_COMPANIES from "../../constants/cardCompanies";
import Button from "../@common/Button/Button";

type CardCompanyButtonProps = {
  cardCompany: CardCompany;
  onClick: () => void;
};

const CardCompanyButton = ({ cardCompany, onClick }: CardCompanyButtonProps) => {
  return (
    <CompanyButton type="button" onClick={onClick}>
      <CompanyLogo src={CARD_COMPANIES[cardCompany].logoFilePath} alt={`card-company-${cardCompany}`} />
      <CompanyName>{CARD_COMPANIES[cardCompany].koreanName}</CompanyName>
    </CompanyButton>
  );
};

const CompanyButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 64px;
  background-color: transparent;
`;

const CompanyLogo = styled.img`
  width: 38px;
  height: 38px;

  transition: transform 0.1s ease;

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
