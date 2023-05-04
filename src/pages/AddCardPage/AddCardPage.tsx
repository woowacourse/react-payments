import React, { type FormEvent, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
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
      <Page>
        <TitleWrapper>
          <Button icon={<PrevIcon />} text="" onClick={onPrevButtonClick} />
          <Title>카드 추가</Title>
        </TitleWrapper>
        <CardWrapper>
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
          <ChangeButtonWrapper>
            <Button
              color={CARD_COMPANY_DATA[cardCompany].COLOR}
              backgroundColor={CARD_COMPANY_DATA[cardCompany].BACKGROUND_COLOR}
              text="카드 변경"
              onClick={() => setCardCompany('DEFAULT')}
              type="button"
              padding="8px"
              borderRadius="8px"
            />
          </ChangeButtonWrapper>
        </CardWrapper>
        <InputWrapperParent
          onSubmit={onCardInfoValidateAndGoRegisterPage}
          ref={cardForm}
          onKeyDown={(e) => onInputKeydown(e)}
        >
          <InputWrapper>
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
              <CvcWrapper>
                <CvcInput id={INPUT_ID.CVC} cvcInformation={cvc} />
              </CvcWrapper>
            </InputField>
            <InputField id={INPUT_ID.PASSWORD} text="카드 비밀번호">
              <PasswordInput
                id={INPUT_ID.PASSWORD}
                firstPasswordInformation={firstPassword}
                secondPasswordInformation={secondPassword}
              />
            </InputField>
          </InputWrapper>
          <NextButtonWrapper>
            <Button
              isDisable={
                cardForm.current ? !cardForm.current.checkValidity() : true
              }
              text="다음"
            />
          </NextButtonWrapper>
        </InputWrapperParent>
      </Page>
      <Modal
        isOpen={cardCompany === CARD_COMPANY.DEFAULT}
        ariaLabel="카드사 선택창"
      >
        <SelectCardCompany onCardCompanySelectClick={onBankSelectClick} />
      </Modal>
    </div>
  );
}

function PrevIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </Svg>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 28px;
  min-height: 100vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-left: 12px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

const ChangeButtonWrapper = styled.div`
  margin-top: 20px;
  opacity: 0.9;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InputWrapperParent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0 25px 0;
`;
const CvcWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NextButtonWrapper = styled.div`
  margin-top: 25px;
  align-self: end;
`;

const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;
