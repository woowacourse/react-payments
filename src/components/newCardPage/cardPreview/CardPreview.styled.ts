import styled from "styled-components";
import { CardCompany } from "../../../types/type";

export const TYPE_COMPANY = {
  BC카드: "#f04651",
  신한카드: "#0046FF",
  카카오뱅크: "#FFE600",
  현대카드: "#000000",
  우리카드: "#007BC8",
  롯데카드: "#ED1C24",
  하나카드: "#009490",
  국민카드: "#6A6056",
};

interface CardPreviewContainerProps {
  cardCompany: CardCompany;
}

export const CardPreviewContainer = styled.div`
  width: 100%;
  height: 238px;
`;

// 카드 앞면
export const FrontCard = styled.div<CardPreviewContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 4px;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background: ${(props) => (props.cardCompany ? TYPE_COMPANY[props.cardCompany] : "#333333")};
  box-shadow: 3px 3px 5px 0px #00000040;
  margin: auto;
  margin-top: 77px;
  margin-bottom: 29px;
`;

export const ChipSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 12px;
`;

export const ICChip = styled.div`
  width: 36px;
  height: 22px;
  background: #ddcd78;
  border: 0.5px solid #ddcd781a;
  border-radius: 3px;
`;

export const CardBrand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 22px;
  background: #ffffff;
  border: 0.5px solid #0000001a;
  border-radius: 3px;

  img {
    width: 60%;
  }
`;

export const CardInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.16em;
  text-align: left;
  color: #ffffff;
  margin: 0 17px;

  div {
    height: 20px;
  }
`;

// 카드 뒷면

export const BackCard = styled.div`
  position: relative;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px #00000040;
  margin: auto;
  margin-top: 77px;
  margin-bottom: 29px;
  background: #d5d5d5;
`;

export const CVC = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 24px;
  margin-top: 84px;
  padding: 0 16px;
  background: #cbba64;
  color: #ffffff;
  text-align: right;
  line-height: 24px;
`;
