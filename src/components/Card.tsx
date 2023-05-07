import { useContext, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import { IcChip } from "../assets";
import { CARD_COMPANY, CARD_COMPANY_NOT_SELECTED_STRING } from "../constants";
import { ModalDispatchContext } from "../context";
import { cardCompanyTheme } from "../style/theme";
import { CardType } from "../types";
import { getCardNumberArray } from "../utils/card";

const Card = ({
  cardNumber,
  ownerName,
  expiredDate,
  cardCompany,
}: CardType) => {
  const cardNumberArray = useMemo(
    () => getCardNumberArray(cardNumber),
    [cardNumber]
  );
  const { toggleModal } = useContext(ModalDispatchContext);

  return (
    <ThemeProvider theme={cardCompanyTheme[cardCompany]}>
      <CardWrapper onClick={toggleModal}>
        <p>{cardCompany}</p>
        <img src={IcChip} alt="ic-chip" />
        <CardInfoWrapper>
          <UpInfoWrapper>
            {cardNumberArray.map((cardNumber) => (
              <span key={crypto.randomUUID()}>{cardNumber}</span>
            ))}
          </UpInfoWrapper>
          <BottomInfoWrapper>
            <span>{ownerName}</span>
            <span>{expiredDate}</span>
          </BottomInfoWrapper>
        </CardInfoWrapper>
        <CompanyLogoWrapper>
          {cardCompany !== CARD_COMPANY_NOT_SELECTED_STRING && (
            <img src={CARD_COMPANY[cardCompany].img} alt="카드사로고" />
          )}
        </CompanyLogoWrapper>
      </CardWrapper>
    </ThemeProvider>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 213px;
  height: 133px;

  position: relative;
  padding: 15px 14px 0 14px;
  box-sizing: border-box;

  border-radius: 5px;
  box-shadow: 0 3px 3px -3px rgba(0, 0, 0, 0.25);

  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.point};

  & > p {
    font-weight: 500;
    font-size: 12px;
    margin-bottom: 17px;
  }
`;

const CompanyLogoWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 55px;

  padding: 8px 5px;
  box-sizing: border-box;

  font-size: 14px;

  & > div > span {
    font-weight: 600;
    padding-right: 6px;
  }
`;

const UpInfoWrapper = styled.div`
  display: flex;
  max-width: max-content;
  letter-spacing: 2.5px;
`;

const BottomInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
`;

export default Card;
