import { CardNumberProps } from '../../../domain/card/CardNumber/types';
import { CardBrandProps, CardBrandType } from '../../../domain/card/CardBrand/types';
import { CardExpirationDateProps } from '../../../domain/card/CardExpirationDate/types';
import { CardCVCNumberProps } from '../../../domain/card/CardCVCNumber/types';
import { CardPasswordProps } from '../../../domain/card/CardPasswordNumber/types';
import { CARD_STEPS } from '../constants';

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

export type CardStepKey = keyof typeof CARD_STEPS;
