import styled from "styled-components";
import { CARD_IMAGE, CardImageType } from "../../constants/constants";

export const PreviewContainerCSS = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
`;

export const PreviewCSS = styled.div<{ $brand: string }>`
  background-color: ${({ $brand }) =>
    $brand === "BC카드"
      ? "#F04651"
      : $brand === "신한카드"
      ? "#0046FF"
      : $brand === "카카오뱅크"
      ? "#FFE600"
      : $brand === "현대카드"
      ? "#000000"
      : $brand === "우리카드"
      ? "#007BC8"
      : $brand === "롯데카드"
      ? "#ED1C24"
      : $brand === "하나카드"
      ? "#009490"
      : $brand === "국민카드"
      ? "#6A6056"
      : "black"};
  width: 230px;
  height: 180px;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.large};
  letter-spacing: 2px;
  border-radius: 8px;

  padding: 0 25px;
  gap: 10px;
`;

export const CardNumbersGroupCSS = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 7px;
`;

export const CardTypeCSS = styled.div<{ $cardType: CardImageType }>`
  background: no-repeat url(${(props) => CARD_IMAGE[props.$cardType]});
  background-size: cover;
  width: 44px;
  height: 30px;
  border-radius: 4px;
`;

export const LogoCSS = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ICChipCSS = styled.div`
  background-color: #ddcd78;
  border-radius: 4px;
  width: 44px;
  height: 25px;
`;
