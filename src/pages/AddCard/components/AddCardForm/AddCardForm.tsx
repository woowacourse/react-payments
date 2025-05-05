import * as S from './AddCardForm.styles';
import CardNumber from '../../../../domain/card/CardNumber/CardNumber';
import CardBrand from '../../../../domain/card/CardBrand/CardBrand';
import CardExpirationDate from '../../../../domain/card/CardExpirationDate/CardExpirationDate';
import CardCVCNumber from '../../../../domain/card/CardCVCNumber/CardCVCNumber';
import CardPasswordNumber from '../../../../domain/card/CardPasswordNumber/CardPasswordNumber';
import Button from '../../../../components/Button/Button';
import { CardStepKey } from '../../types';
import { Fragment, ReactNode } from 'react';
import { CARD_STEPS } from '../../constants';
import { useCardFormStep } from './hooks/useCardFormStep';
import { useCardFormSubmit } from './hooks/useCardFormSubmit';
import { useCardFormContext } from '../../context/useCardFormContext';

export default function AddCardForm({ _testModeSteps }: { _testModeSteps?: string[] }) {
  const nextStepFlags = useCardFormStep(_testModeSteps);
  const { isFormValid, handleFormSubmit } = useCardFormSubmit();
  const { isCardPasswordNextStep } = useCardFormContext();

  const componentsMap: Record<(typeof CARD_STEPS)[CardStepKey], ReactNode> = {
    [CARD_STEPS.CARD_NUMBERS]: <CardNumber />,
    [CARD_STEPS.CARD_BRAND]: <CardBrand />,
    [CARD_STEPS.CARD_EXPIRATION_DATE]: <CardExpirationDate />,
    [CARD_STEPS.CARD_CVC_NUMBER]: <CardCVCNumber />,
    [CARD_STEPS.CARD_PASSWORD]: <CardPasswordNumber />,
  };

  return (
    <S.CardAddFrom onSubmit={handleFormSubmit}>
      {nextStepFlags.map((step) => {
        return <Fragment key={step}>{componentsMap[step]}</Fragment>;
      })}
      {isCardPasswordNextStep && isFormValid && (
        <S.CardAddFromButtonWrapper>
          <Button type="submit">확인</Button>
        </S.CardAddFromButtonWrapper>
      )}
    </S.CardAddFrom>
  );
}
