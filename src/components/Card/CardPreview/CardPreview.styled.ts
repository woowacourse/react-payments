import CardPreviewImg from "/card-preview.jpg";
import styled from "styled-components";
import { CARD_TYPE, CardType } from "../../../constants/constants";

const CARD_IMAGE = {
  [CARD_TYPE.visa]: "./visa.jpg",
  [CARD_TYPE.master]: "./master.jpg",
};

export const CardPreviewContainerCSS = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
`;

export const CardPreviewCSS = styled.div`
  background: no-repeat center url(${CardPreviewImg});
  background-size: cover;
  width: 260px;
  height: 200px;

  color: #ffffff;
  font-size: 20px;
  letter-spacing: 2px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25px;
  gap: 10px;
  position: relative;
`;

export const CardNumbersGroupCSS = styled.div`
  display: flex;
  gap: 7px;
`;

export const CardTypeCSS = styled.div<{ $cardType: CardType }>`
  background: no-repeat url(${(props) => CARD_IMAGE[props.$cardType]});
  background-size: cover;
  width: 44px;
  height: 30px;
  border-radius: 4px;
  position: absolute;
  right: 25px;
  top: 10px;
`;
