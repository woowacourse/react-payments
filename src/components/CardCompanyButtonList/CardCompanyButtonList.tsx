import styled from "styled-components";
import { CardCompany } from "../../types";
import CardCompanyButton from "../CardCompanyButton/CardCompanyButton";

type CardCompanyButtonListProps = {
  cardCompanies: CardCompany[];
};

const CardCompanyButtonList = ({ cardCompanies }: CardCompanyButtonListProps) => {
  return (
    <CardCompanyButtonContainer>
      <Instruction>카드사 선택</Instruction>
      <CardCompanyButtonWrapper>
        {cardCompanies.map((company) => (
          <CardCompanyButton cardCompany={company} />
        ))}
      </CardCompanyButtonWrapper>
    </CardCompanyButtonContainer>
  );
};

const Instruction = styled.h3`
  font-size: 16px;

  margin-bottom: 20px;
`;

const CardCompanyButtonContainer = styled.div``;

const CardCompanyButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
  justify-items: center;
`;

export default CardCompanyButtonList;
