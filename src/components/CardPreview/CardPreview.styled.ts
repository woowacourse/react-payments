import styled from 'styled-components';
import { CardCompany } from '../../types/type';
import { COMPANY_TABLE } from '../../constants/table';

export const Card = styled.div<{
  animationProps: CardAnimationProp;
  cardCompany: CardCompany;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 246px;
  height: 154px;
  padding: 16px;
  border-radius: 8px;
  color: ${(props) =>
    props.cardCompany ? COMPANY_TABLE[props.cardCompany].font : 'white'};
  background-color: ${(props) =>
    props.cardCompany
      ? COMPANY_TABLE[props.cardCompany].background
      : '#333333'};
  box-shadow: rgba(0, 0, 0, 0.35) 8px 12px 16px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05) perspective(1200px)
      rotate3d(
        ${(props) => -props.animationProps.centerY / 100},
        ${(props) => props.animationProps.centerX / 100},
        0,
        ${(props) => props.animationProps.distance / 7}deg
      );
    box-shadow: rgba(0, 0, 0, 0.35)
      ${(props) => 16 - props.animationProps.left / 10}px
      ${(props) => 24 - props.animationProps.top / 10}px 32px;
  }
`;

export const Light = styled.div<{ animationProps: CardAnimationProps }>`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-image: radial-gradient(
    circle at ${(props) => props.animationProps.left}px
      ${(props) => props.animationProps.top}px,
    #00000016,
    #ffffff16,
    #ffffff64
  );
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardNumbers = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardNumber = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: inherit;
  width: 36px;
`;

export const CardNameAndExpiration = styled.div`
  display: flex;
  justify-content: space-between;
  height: 36px;
`;

export const CardNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const NameLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 9.5px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: inherit;
`;

export const Name = styled.p`
  max-width: 156px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: inherit;
  text-transform: uppercase;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CardExpirationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ExpirationLabel = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 9.5px;
  font-weight: 500;
  line-height: 15px;
  text-align: right;
  color: inherit;
`;

export const Expiration = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: right;
  color: inherit;
`;

export const Image = styled.img`
  width: 36px;
  height: 28px;
`;
