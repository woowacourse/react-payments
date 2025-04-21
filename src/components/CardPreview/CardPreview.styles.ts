import styled from '@emotion/styled';
import { CardBrandType } from '../CardBrand/CardBrand';

const cardPreviewBackgroundColor = {
  BC카드: '#F04651;',
  신한카드: '#0046FF;',
  카카오뱅크: '#FFE600;',
  현대카드: '#000000;',
  우리카드: '#007BC8;',
  롯데카드: '#ED1C24;',
  하나카드: '#009490;',
  국민카드: '#6A6056;',
} as const;

export const CardPreviewWrapper = styled.div<{ CardBrandType: CardBrandType | null }>`
  width: 340px;
  height: 200px;
  ${(props) => `background-color:${props.CardBrandType ? cardPreviewBackgroundColor[props.CardBrandType] : '#333;'}`}
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  gap: 14px;
  color: #fff;
  font-size: 18px;
`;
export const CardPreviewTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ICChip = styled.div`
  width: 36px;
  height: 22px;
  background-color: #ddcd78;
  border: 0.5px solid #ddcd78;
  border-radius: 2.5px;
`;

export const CardPreviewMiddle = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  text-align: center;
  vertical-align: middle;
`;
