import React, { type FormEvent, useCallback, useEffect, useRef } from 'react';
import { useFocusInput } from '@hooks/useFocusInput';
import { useFormInputs } from '@hooks/useFormInputs';
import { useHideScrollState } from '@hooks/useHideScrollState';
import { useCardInputInfoContext } from '@contexts/useCardInputInfo';
import { usePageContext } from '@contexts/usePageContext';
import { CardNumberInput } from '@components/addCardPage/CardNumberInput';
import { CvcInput } from '@components/addCardPage/CvcInput';
import { ExpirationInput } from '@components/addCardPage/ExpirationInput';
import { OwnerInput } from '@components/addCardPage/OwnerInput';
import { PasswordInput } from '@components/addCardPage/PasswordInput';
import { SelectCardCompany } from '@components/addCardPage/SelectCardCompany';
import { Button } from '@components/common/Button';
import { Card } from '@components/common/Card';
import { InputField } from '@components/common/InputField';
import { Modal } from '@components/common/Modal';
import { type CardCompanyType } from '@type/card';
import { setNextInputFocus } from '@utils/common';
import { formValidate } from '@utils/formValidate';
import { isPastDate } from '@utils/validate';
import { CARD_COMPANY, CARD_COMPANY_DATA } from '@constants/cardCompany';
import { PAGE_KIND } from '@constants/constant';
import * as S from './AddCardPage.Styles';

const INPUT_ID = {
  CARD_NUMBER: 'cardNumber',
  EXPIRATION: 'expiration',
  OWNER: 'owner',
  CVC: 'cvc',
  PASSWORD: 'password',
};

export default function AddCardPage() {
  const { setCardInputInfo } = useCardInputInfoContext();
  const { setPage } = usePageContext();
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);
  const { formInputs } = useFormInputs();
  const [cardCompany, setCardCompany] = useHideScrollState<CardCompanyType>(
    CARD_COMPANY.DEFAULT,
    (value) => {
      return value === CARD_COMPANY.DEFAULT;
    }
  );

  const onBankSelectClick = (value: CardCompanyType) => {
    setNextInputFocus(cardForm.current);
    setCardCompany(value);
  };

  const {
    firstCardNumber,
    secondCardNumber,
    thirdCardNumber,
    fourthCardNumber,
    month,
    year,
    owner,
    cvc,
    firstPassword,
    secondPassword,
  } = formInputs.addCardPage;

  const onCardInfoValidateAndGoRegisterPage = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const { validationResult } = formValidate(formInputs.addCardPage);

    if (!validationResult || !month.inputRef.current) {
      return;
    }

    if (isPastDate(Number(year.value), Number(month.value))) {
      month.inputRef.current.focus();
      month.setError('지난 기간은 입력할 수 없습니다.');
      return;
    }

    setCardInputInfo({
      company: cardCompany,
      cardNumber: {
        first: firstCardNumber.value,
        second: secondCardNumber.value,
        third: '&&&&',
        fourth: '&&&&',
      },
      expirationDate: {
        month: month.value,
        year: year.value,
      },
      owner: owner.value.toUpperCase(),
    });

    setPage(PAGE_KIND.REGISTER_CARD);
  };

  const askPrevPage = useCallback(() => {
    const result = window.confirm(
      '이전 페이지로 이동하시면 현재 입력하신 내용이 사라집니다. 정말 이동하시겠습니까?'
    );

    if (result) {
      setPage(PAGE_KIND.HOME);
    }
  }, [setPage]);

  const onPrevButtonClick = () => {
    askPrevPage();
  };

  useEffect(() => {
    window.history.pushState(null, '', window.location.href);

    window.addEventListener('popstate', askPrevPage);

    return () => {
      window.removeEventListener('popstate', askPrevPage);
    };
  }, [askPrevPage]);

  return (
    <div>
      <S.Page>
        <S.TitleWrapper>
          <Button icon={<S.PrevIcon />} text="" onClick={onPrevButtonClick} />
          <S.Title>카드 추가</S.Title>
        </S.TitleWrapper>
        <S.CardWrapper>
          <Card
            companyKind={cardCompany}
            cardNumberSet={[
              firstCardNumber.value,
              secondCardNumber.value,
              thirdCardNumber.value,
              fourthCardNumber.value,
            ]}
            month={month.value ? month.value : 'MM'}
            year={year.value ? year.value : 'YY'}
            owner={owner.value ? owner.value : 'NAME'}
          />
          <S.ChangeButtonWrapper>
            <Button
              color={CARD_COMPANY_DATA[cardCompany].COLOR}
              backgroundColor={CARD_COMPANY_DATA[cardCompany].BACKGROUND_COLOR}
              text="카드 변경"
              onClick={() => setCardCompany('DEFAULT')}
              type="button"
              padding="8px"
              borderRadius="8px"
            />
          </S.ChangeButtonWrapper>
        </S.CardWrapper>
        <S.InputWrapperParent
          onSubmit={onCardInfoValidateAndGoRegisterPage}
          ref={cardForm}
          onKeyDown={(e) => onInputKeydown(e)}
        >
          <S.InputWrapper>
            <InputField id={INPUT_ID.CARD_NUMBER} text="카드 번호">
              <CardNumberInput
                id={INPUT_ID.CARD_NUMBER}
                firstNumberInformation={firstCardNumber}
                secondNumberInformation={secondCardNumber}
                thirdNumberInformation={thirdCardNumber}
                fourthNumberInformation={fourthCardNumber}
              />
            </InputField>
            <InputField id={INPUT_ID.EXPIRATION} text="만료일">
              <ExpirationInput
                id={INPUT_ID.EXPIRATION}
                yearInformation={year}
                monthInformation={month}
              />
            </InputField>
            <InputField
              id={INPUT_ID.OWNER}
              text="카드 소유자 이름(선택)"
              inputLength={`${owner.value.length}/30`}
            >
              <OwnerInput id={INPUT_ID.OWNER} ownerInformation={owner} />
            </InputField>
            <InputField id={INPUT_ID.CVC} text="보안 코드(CVC/CVV)">
              <S.CvcWrapper>
                <CvcInput id={INPUT_ID.CVC} cvcInformation={cvc} />
              </S.CvcWrapper>
            </InputField>
            <InputField id={INPUT_ID.PASSWORD} text="카드 비밀번호">
              <PasswordInput
                id={INPUT_ID.PASSWORD}
                firstPasswordInformation={firstPassword}
                secondPasswordInformation={secondPassword}
              />
            </InputField>
          </S.InputWrapper>
          <S.NextButtonWrapper>
            <Button
              isDisable={
                cardForm.current ? !cardForm.current.checkValidity() : true
              }
              text="다음"
            />
          </S.NextButtonWrapper>
        </S.InputWrapperParent>
      </S.Page>
      <Modal
        isOpen={cardCompany === CARD_COMPANY.DEFAULT}
        ariaLabel="카드사 선택창"
      >
        <SelectCardCompany onCardCompanySelectClick={onBankSelectClick} />
      </Modal>
    </div>
  );
}
