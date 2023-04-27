import { Dispatch, SetStateAction, useContext } from "react";
import styled from "styled-components";
import { CARD_COMPANY } from "../constants";
import { Context } from "../context";
import { CardType } from "../types";

interface CardCompanyType {
  setCard: Dispatch<SetStateAction<CardType>>;
}

const CardCompany = ({ setCard }: CardCompanyType) => {
  const { toggleModal } = useContext(Context);

  const handleCardCompanyClicked =
    (companyName: CardType["cardCompany"]) => () => {
      setCard((prev): CardType => ({ ...prev, cardCompany: companyName }));
      toggleModal();
    };

  return (
    <CardCompanyWrapper>
      {Object.keys(CARD_COMPANY)
        .splice(1)
        .map((companyName) => (
          <CardCompanyGroup
            key={crypto.randomUUID()}
            onClick={handleCardCompanyClicked(companyName)}
          >
            <img src={CARD_COMPANY[companyName].img} alt="카드사로고" />
            <p>{companyName}</p>
          </CardCompanyGroup>
        ))}
    </CardCompanyWrapper>
  );
};

const CardCompanyWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  padding: 5% 15%;
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
    opacity: 70%;
    transform: scale(1.05);
  }
`;

export default CardCompany;
