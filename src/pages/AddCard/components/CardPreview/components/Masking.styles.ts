import styled from '@emotion/styled';
import { CardBrandType } from '../../../../../domain/card/CardBrand/types';

export const StyledMasking = styled.div<{ CardBrandType: CardBrandType | null }>`
  width: 10px;
  aspect-ratio: 1/1;
  ${(props) => `background-color:${props.CardBrandType === '카카오뱅크' ? '#333;' : '#fff;'}`}
  border-radius: 50%;
`;
