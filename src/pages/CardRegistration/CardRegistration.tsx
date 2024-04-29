import { useState } from 'react';
import * as S from './CardRegistration.style';

import CardPreview from '../../components/CardPreview/CardPreview';
import useCardNumbers from '../../hooks/useCardNumbers';
import useExpirationDate from '../../hooks/useExpirationDate';

import { CARD_COMPANY_COLOR } from '../../constants/cardSection';
import CardNumbersInput from '../../components/Inputs/CardNumbersInput';
import CardBrandSelect from '../../components/Inputs/CardBrandSelect';
import ExpirationDateInput from '../../components/Inputs/ExpirationDateInput';
import CardOwnerInput from '../../components/Inputs/CardOwnerInput';
import CvcNumberInput from '../../components/Inputs/CvcNumberInput';
import PasswordInput from '../../components/Inputs/PasswordInput';
import useCvcNumber from '../../hooks/useCvcNumber';
import usePassword from '../../hooks/usePassword';
import useName from '../../hooks/useName';
import useCardCompany from '../../hooks/useCardCompany';

export type CardNumberState = {
  value: string;
  isError: boolean;
  errorMessage: string;
};

export default function CardRegistration() {
  const [isFlip, setIsFlip] = useState(false);
  const [cardBrandDisplay, setCardBrandDisplay] = useState(false);
  const [expirationDateDisplay, setExpirationDateDisplay] = useState(false);
  const [nameDisplay, setNameDisplay] = useState(false);
  const [cvcDisplay, setCvcDisplay] = useState(false);
  const [passwordDisplay, setPasswordDisplay] = useState(false);

  const { cardImageSrc, cardNumbersArray, isValidCardNumbers } = useCardNumbers<HTMLInputElement>();
  const { cardCompany, isValidCardCompany } = useCardCompany();
  const { month, year, isValidExpirationDate } = useExpirationDate();
  const { name, isValidName } = useName();
  const { cvc, isValidCvc } = useCvcNumber();
  const { password, isValidPassword } = usePassword();

  const isShowConfirmButton =
    isValidCardNumbers &&
    isValidExpirationDate &&
    isValidName &&
    isValidCvc &&
    isValidPassword &&
    isValidCardCompany;

  return (
    <>
      <S.SubContainer>
        <S.CardPreviewWrapper>
          <CardPreview
            isFlip={isFlip}
            cardNumbers={cardNumbersArray.map(({ value }) => value)}
            month={month.value}
            year={year.value}
            name={name.value.toUpperCase()}
            cvc={cvc.value}
            cardImageSrc={cardImageSrc}
            cardColor={CARD_COMPANY_COLOR[cardCompany.value]}
          />
        </S.CardPreviewWrapper>
        <S.CardInfoContainer>
          {/* 카드 번호 입력 */}
          <CardNumbersInput
            cardNumbersArray={cardNumbersArray}
            setNextContentDisplay={setCardBrandDisplay}
          />

          {/* 카드사 선택 */}
          {cardBrandDisplay && (
            <CardBrandSelect
              cardCompany={cardCompany}
              setNextContentDisplay={setExpirationDateDisplay}
            />
          )}

          {/* 유효기간 입력 */}
          {expirationDateDisplay && (
            <ExpirationDateInput month={month} year={year} setNextContentDisplay={setNameDisplay} />
          )}

          {/* 카드 소유자 입력 */}
          {nameDisplay && <CardOwnerInput name={name} setNextContentDisplay={setCvcDisplay} />}

          {/* CVC 번호 입력 */}
          {cvcDisplay && (
            <CvcNumberInput
              cvc={cvc}
              setNextContentDisplay={setPasswordDisplay}
              setIsFlip={setIsFlip}
            />
          )}
          {/* 비밀번호 입력 */}
          {passwordDisplay && <PasswordInput password={password} />}
        </S.CardInfoContainer>
      </S.SubContainer>
      {isShowConfirmButton && (
        <S.ConfirmLink
          to="/confirm"
          state={{ cardNumber: cardNumbersArray[0].value, cardCompany: cardCompany.value }}
        >
          확인
        </S.ConfirmLink>
      )}
    </>
  );
}
