import styled from '@emotion/styled';

import { colors } from '@/styles/global';

type CardBrandsType =
  | 'BC카드'
  | '신한카드'
  | '카카오뱅크'
  | '현대카드'
  | '우리카드'
  | '롯데카드'
  | '하나카드'
  | '국민카드';

const cardBrandColors = {
  BC카드: '#F04651',
  신한카드: '#0046FF',
  카카오뱅크: '#FFE600',
  현대카드: colors.black,
  우리카드: '#007BC8',
  롯데카드: '#ED1C24',
  하나카드: '#009490',
  국민카드: '#6A6056',
};

export const StyledCardContainer = styled.div<{ cardBrand: string | null }>`
  position: relative;
  background-color: ${({ cardBrand }) =>
    cardBrand ? cardBrandColors[cardBrand as CardBrandsType] : colors.GY3};
  border-radius: 12px;
  width: 350px;
  height: 200px;
  box-shadow: 3px 3px 10px ${colors.GY2};
`;

export const StyledICCheapContainer = styled.div`
  position: absolute;
  top: 8px;
  left: 12px;
  width: 60px;
  height: 40px;
  background-color: ${colors.gold};
  border-radius: 6px;
`;

export const StyledCardTypeIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 12px;
  width: 60px;
  height: 40px;
`;
