import styled from "styled-components";
import {
  CARD_BRAND_COLORS,
  CARD_IMAGE,
  CardImageType,
} from "../../constants/constants";

export const PreviewContainerCSS = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
`;

export const PreviewCSS = styled.div<{ $brand: string }>`
  background-color: ${({ $brand }) => CARD_BRAND_COLORS[$brand] || "black"};
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
