import React, {
  type FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { CardNumberInput } from '@components/addCardPage/CardNumberInput';
import { CvcInput } from '@components/addCardPage/CvcInput';
import { ExpirationInput } from '@components/addCardPage/ExpirationInput';
import { OwnerInput } from '@components/addCardPage/OwnerInput';
import { PasswordInput } from '@components/addCardPage/PasswordInput';
import { RegisteredCard } from '@components/addCardPage/RegisteredCard';
import { SelectCardCompany } from '@components/addCardPage/SelectCardCompany';
import { Button } from '@components/common/Button';
import { Card } from '@components/common/Card';
import { InputField } from '@components/common/InputField';
import { Modal } from '@components/common/Modal';
import { CARD_COMPANY_DATA } from '@constants/cardCompany';
import { useFocusInput } from '@hooks/useFocusInput';
import { useFormInputs } from '@hooks/useFormInputs';
import { useHideScrollState } from '@hooks/useHideScrollState';
import { type UseInputProps } from '@hooks/useInput';
import {
  type CardCompanyType,
  type CardInfo,
  type PageInfo,
} from '@type/types';
import { createUniqueId, setNextInputFocus } from '@utils/common';
import { formValidate } from '@utils/formValidate';
import { isPastDate } from '@utils/validate';

interface AddCardPageProps {
  cardList: CardInfo[];
  setCardList: (data: CardInfo[]) => void;
  setPage: React.Dispatch<React.SetStateAction<PageInfo>>;
}

export default function AddCardPage({
  cardList,
  setCardList,
  setPage,
}: AddCardPageProps) {
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);
  const { formInputs } = useFormInputs();
  const [isRegister, setIsRegister] = useState(false);
  const [cardCompany, setCardCompany] = useHideScrollState<CardCompanyType>(
    'default',
    (value) => {
      return value === 'default';
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
    cardTitle,
  } = formInputs.addCardPage;

  /*
  모든 인풋의 정보에서 카드 타이틀을 뺍니다.

  인풋의 정보들을 기반으로 유효성 검사를 합니다.

  유효성 검사를 통과한다면 카드 별칭 등록 페이지로 이동합니다.
  */
  const onCardInfoValidateAndGoRegisterPage = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const cardInformation: Record<string, UseInputProps> = {
      ...formInputs.addCardPage,
    };

    delete cardInformation.cardTitle;

    const { validationResult } = formValidate(cardInformation);

    if (!validationResult) {
      return;
    }

    if (isPastDate(Number(year.value), Number(month.value))) {
      if (month.inputRef.current) {
        month.inputRef.current.focus();
      }

      month.setError('지난 기간은 입력할 수 없습니다.');
      return;
    }

    setIsRegister(true);
  };

  const createCard = () => {
    const newCard: CardInfo = {
      id: createUniqueId(),
      company: cardCompany,
      title: cardTitle.value,
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
    };

    const updatedCardList = [newCard, ...cardList];

    setCardList(updatedCardList);

    setPage('homePage');
  };

  const askPrevPage = useCallback(() => {
    const result = window.confirm(
      '이전 페이지로 이동하시면 현재 입력하신 내용이 사라집니다. 정말 이동하시겠습니까?'
    );

    if (result) {
      setPage('homePage');
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

  if (isRegister) {
    return (
      <RegisteredCard
        createCard={createCard}
        cardTitleInformation={cardTitle}
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
    );
  }

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
              color={CARD_COMPANY_DATA[cardCompany].color}
              backgroundColor={CARD_COMPANY_DATA[cardCompany].backgroundColor}
              text="카드 변경"
              onClick={() => setCardCompany('default')}
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
            <InputField text="카드 번호">
              <CardNumberInput
                firstNumberInformation={firstCardNumber}
                secondNumberInformation={secondCardNumber}
                thirdNumberInformation={thirdCardNumber}
                fourthNumberInformation={fourthCardNumber}
              />
            </InputField>
            <InputField text="만료일">
              <ExpirationInput
                yearInformation={year}
                monthInformation={month}
              />
            </InputField>
            <InputField
              text="카드 소유자 이름(선택)"
              inputLength={`${owner.value.length}/30`}
            >
              <OwnerInput ownerInformation={owner} />
            </InputField>
            <InputField text="보안 코드(CVC/CVV)">
              <CvcWrapper>
                <CvcInput cvcInformation={cvc} />
              </CvcWrapper>
            </InputField>
            <InputField text="카드 비밀번호">
              <PasswordInput
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
      <Modal isOpen={cardCompany === 'default'} ariaLabel="카드사 선택창">
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
