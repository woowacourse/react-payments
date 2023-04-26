import React, { FormEvent, useRef } from 'react';
import styled from 'styled-components';
import PrevButton from '../components/common/PrevButton';
import Card from '../components/card/Card';
import InputField from '../components/common/InputField';
import CardNumberInput from '../components/card/input/CardNumberInput';
import ExpiracyInput from '../components/card/input/ExpiracyInput';
import OwnerInput from '../components/card/input/OwnerInput';
import CvcInput from '../components/card/input/CvcInput';
import PasswordInput from '../components/card/input/PasswordInput';
import NextButton from '../components/common/Button';
import { useFocusInput } from '../hooks/useFocusInput';
import {
  createUniqueId,
  isNumber,
  isOnlyKoreanAndEnglish,
  isPrevDate,
  monthValidate,
  yearValidate,
} from '../utils';
import { CardInfo, PageInfo } from '../types';
import { InputValidate, formValidate } from '../hooks/formValidate';
import { useFormInputs } from '../hooks/useFormInputs';

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

  const onCardInfoSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const {
      firstCardInput,
      secondCardInput,
      thirdCardInput,
      fourthCardInput,
      monthInput,
      yearInput,
      ownerInput,
      cvcInput,
      firstPasswordInput,
      secondPasswordInput,
    } = event.currentTarget;

    const currentYear = new Date().getFullYear() % 100;

    const cardInputValue: InputValidate = {
      card: {
        data: [
          firstCardInput,
          secondCardInput,
          thirdCardInput,
          fourthCardInput,
        ],
        maxLength: 4,
        isRequired: true,
        validation: isNumber,
        setError: firstCardNumber.setError,
        errorMessage: '카드 번호는 숫자만 입력 가능합니다.',
      },
      month: {
        data: [monthInput],
        maxLength: 2,
        isRequired: true,
        validation: monthValidate,
        setError: month.setError,
        errorMessage: '달의 입력은 1 ~ 12까지 입력 가능합니다.',
      },
      year: {
        data: [yearInput],
        maxLength: 2,
        isRequired: true,
        validation: yearValidate,
        setError: year.setError,
        errorMessage: `연도는 ${currentYear} ~ ${
          currentYear + 5
        }까지 입력 가능합니다.`,
      },
      cvc: {
        data: [cvcInput],
        maxLength: 3,
        isRequired: true,
        validation: isNumber,
        setError: cvc.setError,
        errorMessage: 'CVC/CVV는 숫자만 입력 가능합니다.',
      },
      owner: {
        data: [ownerInput],
        maxLength: 30,
        isRequired: false,
        validation: isOnlyKoreanAndEnglish,
        setError: owner.setError,
        errorMessage: '사용자 이름은 한글 혹은 영어로만 입력 가능합니다.',
      },
      password: {
        data: [firstPasswordInput, secondPasswordInput],
        maxLength: 1,
        isRequired: true,
        validation: isNumber,
        setError: firstPassword.setError,
        errorMessage: '비밀번호는 숫자만 입력 가능합니다.',
      },
    };

    const cardInputKey = [
      'card',
      'cvc',
      'owner',
      'password',
      'year',
      'month',
    ] as const;

    const { validationResult, wrongInputs } = formValidate(
      cardInputValue,
      cardInputKey
    );

    if (!validationResult) {
      wrongInputs[0].focus();
      return;
    }

    if (isPrevDate(Number(yearInput.value), Number(monthInput.value))) {
      monthInput.focus();
      cardInputValue.month.setError('지난 기간은 입력할 수 없습니다.');
      return;
    }

    const newCard: CardInfo = {
      id: createUniqueId(),
      cardNumber: {
        fisrt: firstCardInput.value,
        second: secondCardInput.value,
        third: '&&&&',
        fourth: '&&&&',
      },
      expiracy: {
        month: monthInput.value,
        year: yearInput.value,
      },
      owner: ownerInput.value,
    };

    const updatedCardList = [...cardList, newCard];

    setCardList(updatedCardList);

    setPage('homePage');
  };

  const onPrevButtonClick = () => {
    const result = window.confirm('정말 닫으시겠습니까?');
    if (result) {
      setPage('homePage');
    }
  };

  return (
    <Page>
      <TitleWrapper>
        <PrevButton onClick={onPrevButtonClick} />
        <Title>카드 추가</Title>
      </TitleWrapper>
      <CardWrapper>
        <Card
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
      </CardWrapper>
      <InputWrapperParent
        onSubmit={onCardInfoSubmit}
        ref={cardForm}
        onKeyDown={(e) => onInputKeydown(e)}
      >
        <InputWrapper>
          <InputField kind="cardNumber">
            <CardNumberInput
              firstNumber={firstCardNumber}
              secondNumber={secondCardNumber}
              thirdNumber={thirdCardNumber}
              fourthNumber={fourthCardNumber}
            />
          </InputField>
          <InputField kind="expiracy">
            <ExpiracyInput year={year} month={month} />
          </InputField>
          <InputField kind="owner" inputLength={`${owner.value.length}/30`}>
            <OwnerInput owner={owner} />
          </InputField>
          <InputField kind="cvc">
            <CvcWrapper>
              <CvcInput cvc={cvc} />
            </CvcWrapper>
          </InputField>
          <InputField kind="password">
            <PasswordInput
              firstPassword={firstPassword}
              secondPassword={secondPassword}
            />
          </InputField>
        </InputWrapper>
        <NextButtonWrapper>
          <NextButton
            isDisable={
              cardForm.current ? !cardForm.current.checkValidity() : true
            }
            text="다음"
          />
        </NextButtonWrapper>
      </InputWrapperParent>
    </Page>
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
  color: #383838;
  margin-left: 12px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
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
  margin-top: 40px;
  margin: 40px 0 25px 0;
`;
const CvcWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NextButtonWrapper = styled.div`
  margin-top: 25px;
  align-self: end;
`;
