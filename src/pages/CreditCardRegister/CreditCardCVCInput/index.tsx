import { useState } from 'react';

import Input from '@Components/Input';

import * as S from './style';
import InputLabel from '../InputLabel';
import InputLayout from '../InputLayout';

type Props = {
  creditCardCVC: string;
  errorMessage: string | null;
  setCreditCardCVC: React.Dispatch<React.SetStateAction<string>>;
};

function CreditCardCVCInput({ creditCardCVC, errorMessage, setCreditCardCVC }: Props) {
  const [isHoverHelperIcon, setIsHoverHelperIcon] = useState(false);

  const handleChangeCreditCardCVC = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCVC = event.target.value;
    if (newCVC.length > 3) return;

    setCreditCardCVC(newCVC);
  };

  const handleGuideIconMouseEnter = () => setIsHoverHelperIcon(true);

  const handleGuideIconMouseLeave = () => setIsHoverHelperIcon(false);

  return (
    <InputLayout errorMessage={errorMessage}>
      <InputLabel label="보안 코드(CVC/CVV" />
      <S.CVCInputLayout>
        <Input
          type="password"
          value={creditCardCVC}
          width="72px"
          textAlign="center"
          onChange={handleChangeCreditCardCVC}
          maxLength={3}
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
