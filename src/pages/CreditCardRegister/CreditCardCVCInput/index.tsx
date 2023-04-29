import { useContext, useState } from 'react';

import Input from '@Components/Input';
import InputLabel from '@Components/InputLabel';
import InputLayout from '@Components/InputLayout';

import {
  CreditCardRegisterContext,
  CreditCardRegisterUpdateContext,
} from '@Contexts/CreditCardRegister/CreditCardRegisterContext';

import { CREDIT_CARD_LENGTH } from '@Constants/creditCard';

import * as S from './style';

function CreditCardCVCInput() {
  const [isHoverHelperIcon, setIsHoverHelperIcon] = useState(false);

  const {
    creditCard: { cvc },
    errorMessage: { cvc: errorMessage },
  } = useContext(CreditCardRegisterContext);
  const {
    update: { cvc: update },
  } = useContext(CreditCardRegisterUpdateContext);

  const handleChangeCreditCardCVC = (event: React.ChangeEvent<HTMLInputElement>) => {
    update(event.target.value);
  };

  const handleGuideIconMouseEnter = () => setIsHoverHelperIcon(true);

  const handleGuideIconMouseLeave = () => setIsHoverHelperIcon(false);

  return (
    <InputLayout errorMessage={errorMessage}>
      <InputLabel label="보안 코드(CVC/CVV)" />
      <S.CVCInputLayout>
        <Input
          type="password"
          value={cvc}
          width="72px"
          textAlign="center"
          onChange={handleChangeCreditCardCVC}
          maxLength={CREDIT_CARD_LENGTH.cvc}
        />
        <S.GuideLayout>
          <S.GuideIcon onMouseEnter={handleGuideIconMouseEnter} onMouseLeave={handleGuideIconMouseLeave}>
            ?
          </S.GuideIcon>
          {isHoverHelperIcon && (
            <S.GuideTextLayout>
              <S.GuideText>카드 뒷면에 입력된 마지막 숫자 3자리를 입력해주세요.</S.GuideText>
            </S.GuideTextLayout>
          )}
        </S.GuideLayout>
      </S.CVCInputLayout>
    </InputLayout>
  );
}

export default CreditCardCVCInput;
