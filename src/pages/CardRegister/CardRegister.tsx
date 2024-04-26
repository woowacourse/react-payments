import { useState } from 'react';
import * as S from './CardRegister.style';

import CardPreview from '../../components/CardPreview/CardPreview';
import useInput from '../../hooks/useInput';
import useCardNumbers from '../../hooks/useCardNumbers';
import useExpirationDate from '../../hooks/useExpirationDate';
import validate from '../../utils/validate';

import { CARD_COMPANY_COLOR, OWNER_NAME } from '../../constants/cardSection';
import CardNumbersInput from '../../components/Inputs/CardNumbersInput';
import CardBrandSelect from '../../components/Inputs/CardBrandSelect';
import ExpirationDateInput from '../../components/Inputs/ExpirationDateInput';
import CardOwnerInput from '../../components/Inputs/CardOwnerInput';
import CvcNumberInput from '../../components/Inputs/CvcNumberInput';
import PasswordInput from '../../components/Inputs/PasswordInput';

export type CardNumberState = {
  value: string;
  isError: boolean;
  errorMessage: string;
};

export default function CardRegister() {
  const [isFlip, setIsFlip] = useState(false);
  const [cardBrandDisplay, setCardBrandDisplay] = useState(false);
  const [expirationDateDisplay, setExpirationDateDisplay] = useState(false);
  const [nameDisplay, setNameDisplay] = useState(false);
  const [cvcDisplay, setCvcDisplay] = useState(false);
  const [passwordDisplay, setPasswordDisplay] = useState(false);

  const { cardImageSrc, cardNumbersArray } = useCardNumbers<HTMLInputElement>();
  const cardCompany = useInput<HTMLSelectElement>();
  const { month, year } = useExpirationDate();
  const name = useInput<HTMLInputElement>({
    isError: (state: string) => state !== '' && !validate.isEnglish(state),
    errorMessage: OWNER_NAME.errorMessage,
  });

  const cvc = useInput<HTMLInputElement>(
    {
      isError: (state: string) => state !== '' && !validate.isValidDigit(state),
      errorMessage: '문자 입력은 불가능합니다.',
    },
    [
      {
        isError: (state: string) => !validate.isSatisfiedLength(3, state.length),
        errorMessage: '3자리 숫자를 입력해주세요.',
      },
    ],
  );

  const password = useInput<HTMLInputElement>(
    {
      isError: (state: string) => state !== '' && !validate.isValidDigit(state),
      errorMessage: '숫자만 입력 가능합니다.',
    },
    [
      {
        isError: (state: string) => !validate.isSatisfiedLength(2, state.length),
        errorMessage: '2자리 숫자를 입력해주세요.',
      },
    ],
  );

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
          {/* TODO: 아이디 등 매직넘버 문자열 상수화 */}
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
      {!cardNumbersArray[0].isError &&
        cardNumbersArray[0].value &&
        !cardNumbersArray[1].isError &&
        cardNumbersArray[1].value &&
        !cardNumbersArray[2].isError &&
        cardNumbersArray[2].value &&
        !cardNumbersArray[3].isError &&
        cardNumbersArray[3].value &&
        !cardCompany.isError &&
        cardCompany.value &&
        !month.isError &&
        month.value &&
        !year.isError &&
        year.value &&
        !name.isError &&
        name.value &&
        !cvc.isError &&
        cvc.value &&
        !password.isError &&
        password.value && (
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
