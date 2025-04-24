import { CardNumberProps } from '../../../components/CardNumber/type';
import { CardBrandProps, CardBrandType } from '../../../components/CardBrand/type';
import { CardExpirationDateProps } from '../../../components/CardExpirationDate/type';
import { CardCVCNumberProps } from '../../../components/CardCVCNumber/type';
import { CardPasswordProps } from '../../../components/CardPasswordNumber/type';

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
