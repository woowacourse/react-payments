import styled from "styled-components";
import { CARD_COMPANY } from "../constants";

const CardCompany = () => {
  return (
    <CardCompanyWrapper>
      {Object.keys(CARD_COMPANY).map((companyName) => (
        <CardCompanyGroup>
          <img src={CARD_COMPANY[companyName]} alt="카드사로고" />
          <p>{companyName}</p>
        </CardCompanyGroup>
      ))}
    </CardCompanyWrapper>
  );
};

const CardCompanyWrapper = styled.div`
  display: grid;
  width: 100%;
  padding: 20px 15%;

  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
`;

const CardCompanyGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    margin-top: 15px;
    font-size: 12px;
    color: #525252;
  }

  :hover {
    opacity: 50%;
    transform: scale(1.05);
  }
`;

export default CardCompany;
