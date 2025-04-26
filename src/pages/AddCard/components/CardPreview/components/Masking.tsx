import * as S from './Masking.styles';
import { CardBrandType } from '../../../../../domain/card/CardBrand/type';

export default function Masking({ CardBrandType }: { CardBrandType: CardBrandType | null }) {
  return <S.StyledMasking CardBrandType={CardBrandType}></S.StyledMasking>;
}
