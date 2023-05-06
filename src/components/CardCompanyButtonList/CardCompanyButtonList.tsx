import styled from "styled-components";
import { CardCompany } from "../../types";
import CardCompanyButton from "../CardCompanyButton/CardCompanyButton";
import CARD_COMPANIES from "../../constants/cardCompanies";

const cardCompanies = Object.keys(CARD_COMPANIES) as CardCompany[];

const CardCompanyButtonList = () => {
  return (
    <>
      <Instruction>카드사 선택</Instruction>
      <CardCompanyButtonWrapper>
        {cardCompanies.map((company) => (
          <CardCompanyButton key={company} cardCompany={company} />
        ))}
      </CardCompanyButtonWrapper>
    </>
  );
};

const Instruction = styled.h3`
  font-size: 16px;
  margin-bottom: 20px;
`;

const CardCompanyButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
  justify-items: center;
`;

export default CardCompanyButtonList;
