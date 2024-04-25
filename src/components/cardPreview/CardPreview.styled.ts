import styled from 'styled-components';
import { CARD_COLOR } from '../../constants/card';
import { CARD_TYPE } from '../../types/card';

interface LayoutProps {
  $cardType: CARD_TYPE;
}

export const CardPreviewLayout = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 200px;

  background-color: ${props => CARD_COLOR[props.$cardType]};
  padding: 16px 20px 20px;
  border-radius: 8px;

  color: white;
  box-shadow: 3px 3px 5px 0px #00000040;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
`;

export const CardMagnetic = styled.div`
  background-color: #ddcd78;
  width: 50px;
  border-radius: 5px;
`;

export const BrandImageWrapper = styled.div`
  width: 50px;
  border-radius: 5px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BodyWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 10px;
  letter-spacing: 2px;
`;

export const CardNumbersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  margin-top: 20px;
  gap: 20px;
`;

export const CardNumberText = styled.p`
  display: flex;
  flex-basis: 25%;
  height: 20px;
  font-size: 20px;
`;

export const CardSecretNumber = styled.p`
  display: flex;
  flex-basis: 25%;
  font-size: 28px;
`;

export const ExpiryDateWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 20px;
`;

export const CardholderNameWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const CardholderNameText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BackCardPreviewLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 200px;

  background-color: #d5d5d5;
  border-radius: 8px;

  color: white;
  box-shadow: 3px 3px 5px 0px #00000040;
`;

export const BlankBox = styled.div`
  flex-basis: 60%;
`;

export const CVCWrapper = styled.div`
  background-color: #cbba64;
  flex-basis: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
  letter-spacing: 3px;
  padding-right: 20px;
`;
