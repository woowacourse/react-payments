import styled from 'styled-components';
import { cardBrandsType } from '../../types/cardBrands';
import { CARD_BRANDS } from '../../constants/conditions';

export const CardFrontside = styled.div<{ $brand: cardBrandsType }>`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: ${(props) => {
    if (!props.$brand) return 'var(--grey-600)';
    return CARD_BRANDS[props.$brand].color;
  }};
  box-shadow: 3px 3px 5px 0px var(--card-shadow);
  transition: 0.3s ease;
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ChipBox = styled.div`
  width: 36px;
  height: 22px;
  border-radius: 4px;
  background: var(--card-chip);
  border: 0.5px solid var(--card-chip-border);
`;

export const LogoBox = styled.div`
  width: 36px;
  height: 22px;
  text-align: right;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 14px 5px;
`;

export const InfoBox = styled.p<{ $length?: number }>`
  display: flex;
  justify-content: stretch;
  align-items: center;
  width: ${(props) => props.$length && `calc(100% / ${props.$length})`};
  height: 20px;
  color: var(--grey-100);
  font-size: var(--font-size-xl);
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.08em;
  word-break: break-all;

  img {
    width: 4px;
    margin: 0px 2px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  column-gap: 5px;
`;

export const CardBackside = styled.div`
  position: relative;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  padding: 0;
  background-color: var(--card-backside-bg);
  box-shadow: 3px 3px 5px 0px var(--card-shadow);
  transition: 0.3s ease;
  vertical-align: bottom;
`;

export const CVCBox = styled.div`
  position: absolute;
  bottom: 24px;
  width: 100%;
  height: 24px;
  background-color: var(--card-cvc-bg);
  padding: 2px 16px;
  text-align: right;

  color: var(--grey-100);
  font-size: var(--font-size-xl);
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.08em;
`;
