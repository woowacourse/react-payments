import { CardNumberProps } from '../../../domain/card/CardNumber/type';
import { CardBrandProps, CardBrandType } from '../../../domain/card/CardBrand/type';
import { CardExpirationDateProps } from '../../../domain/card/CardExpirationDate/type';
import { CardCVCNumberProps } from '../../../domain/card/CardCVCNumber/type';
import { CardPasswordProps } from '../../../domain/card/CardPasswordNumber/type';

export interface AddCardFormProps
  extends CardPasswordProps,
    CardCVCNumberProps,
    CardExpirationDateProps,
    CardBrandProps,
    CardNumberProps {
  cardBrandTypeState: CardBrandType | null;
  isCardNumberNextStep: boolean;
  isCardExpirationDateNextStep: boolean;
  isCardBrandNextStep: boolean;
  isCardCVCNumberNextStep: boolean;
  isCardPasswordNextStep: boolean;
}
