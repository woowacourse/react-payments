import { CardBrandType } from '../../../../../domain/card/CardBrand/type';
import * as S from './Masking.styles';

export default function Masking({ CardBrandType }: { CardBrandType: CardBrandType }) {
  return <S.StyledMasking CardBrandType={CardBrandType}></S.StyledMasking>;
}
