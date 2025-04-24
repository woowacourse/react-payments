import styled from "styled-components";
import { CARD_COMPANY, CARD_TYPE } from "../../../constants/constants";
import { CardCompanyState, CardType } from "../../../types/types";

const CARD_IMAGE = {
  [CARD_TYPE.visa]: "./visa.jpg",
  [CARD_TYPE.master]: "./master.jpg",
};

const CARD_COMPANY_COLOR_MAP = {
  [CARD_COMPANY.none]: "#333333",
  [CARD_COMPANY.bc]: "#F04651",
  [CARD_COMPANY.shinhan]: "#0046FF",
  [CARD_COMPANY.kakaobank]: "#FFE600",
  [CARD_COMPANY.hyundai]: "#000000",
  [CARD_COMPANY.woori]: "#007BC8",
  [CARD_COMPANY.lotte]: "#ED1C24",
  [CARD_COMPANY.hana]: "#009490",
  [CARD_COMPANY.kb]: "#6A6056",
};

export const CardPreviewContainerCSS = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;

export const CardPreviewCSS = styled.div<{ $cardCompany: CardCompanyState }>`
  width: 260px;
  height: 200px;
  border-radius: 8px;
  background-size: cover;

  background-color: ${({ $cardCompany }) =>
    CARD_COMPANY_COLOR_MAP[$cardCompany]};

  color: ${({ $cardCompany }) =>
    $cardCompany === CARD_COMPANY.kakaobank ? "#000" : "#fff"};

  font-size: 20px;
  letter-spacing: 2px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  gap: 10px;
  position: relative;
`;

export const CardTopContainerCSS = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardICChipCSS = styled.div`
  background-color: #ddcd78;
  width: 44px;
  height: 30px;
  border-radius: 4px;
  position: absolute;
  left: 25px;
  top: 18px;
`;

export const CardTypeCSS = styled.div<{ $cardType: CardType }>`
  background: no-repeat url(${(props) => CARD_IMAGE[props.$cardType]});
  background-size: cover;
  width: 44px;
  height: 30px;
  border-radius: 4px;
  position: absolute;
  right: 25px;
  top: 18px;
`;

export const CardNumbersGroupCSS = styled.div`
  display: flex;
  gap: 7px;
`;
