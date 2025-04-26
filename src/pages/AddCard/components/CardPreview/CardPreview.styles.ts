import styled from '@emotion/styled';
import { CardBrandType } from '../../../../domain/card/CardBrand/types';
import { cardPreviewBackgroundColor } from './constants';

export const CardPreviewWrapper = styled.div<{ CardBrandType: CardBrandType | null }>`
  width: 340px;
  height: 200px;
  ${(props) => `background-color:${props.CardBrandType ? cardPreviewBackgroundColor[props.CardBrandType] : '#333;'}`}
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 28px;
  color: #fff;
  font-size: 18px;
`;
export const CardPreviewTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ICChip = styled.div`
  width: 46px;
  height: 32px;
  background-color: #ddcd78;
  border: 0.5px solid #ddcd78;
  border-radius: 2.5px;
`;

export const CardPreviewMiddle = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  padding-left: 10px;
`;

export const CardPreviewMiddleText = styled.span<{ CardBrandType?: CardBrandType | null }>`
  display: flex;
  gap: 4px;
  font-size: 22px;
  ${(props) => `color:${props.CardBrandType === '카카오뱅크' ? '#000;' : '#fff;'}`}
  letter-spacing: 0.2rem;
`;

export const CardPreviewDateBox = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  padding-left: 10px;
`;

export const CardPreviewDateBoxText = styled.span<{ CardBrandType: CardBrandType | null }>`
  font-size: 22px;
  ${(props) => `color:${props.CardBrandType === '카카오뱅크' ? '#000;' : '#fff;'}`}
`;
