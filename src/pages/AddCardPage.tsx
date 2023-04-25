import React, { FormEvent, useRef } from 'react';
import styled from 'styled-components';
import { useInput } from '../hooks/useInput';
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
} from '../utils';
import { CardInfo, PageInfo } from '../types';

interface AddCardPageProps {
  cardList: CardInfo[];
  setCardList: (data: CardInfo[]) => void;
  setPage: React.Dispatch<React.SetStateAction<PageInfo>>;
}

interface cardInputValueInfo {
  card: InputDetailInfo;
  month: InputDetailInfo;
  year: InputDetailInfo;
  owner: InputDetailInfo;
  cvc: InputDetailInfo;
  password: InputDetailInfo;
}

interface InputDetailInfo {
  data: HTMLInputElement[];
  maxLength: number;
  isRequired: boolean;
  validation: (value: string) => boolean;
  setError: React.Dispatch<React.SetStateAction<string | undefined>>;
  errorMessage?: string;
}

type InputKind = 'card' | 'cvc' | 'owner' | 'password' | 'month' | 'year';

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

export default function AddCardPage({
  cardList,
  setCardList,
  setPage,
}: AddCardPageProps) {
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);
  const firstCardNumber = useInput('', {
    name: 'firstCardInput',
    maxLength: 4,
  });
  const secondCardNumber = useInput('', {
    name: 'secondCardInput',
    maxLength: 4,
  });
  const thirdCardNumber = useInput('', {
    name: 'thirdCardInput',
    maxLength: 4,
  });
  const fourthCardNumber = useInput('', {
    name: 'fourthCardInput',
    maxLength: 4,
  });

  const year = useInput('', {
    name: 'yearInput',
    errorMessage: '카드의 연도를 확인해주세요',
    maxLength: 2,
  });
  const month = useInput('', {
    name: 'monthInput',
    errorMessage: '카드의 달을 확인해주세요.',
    maxLength: 2,
  });

  const owner = useInput('', {
    name: 'ownerInput',
    maxLength: 30,
  });
  const cvc = useInput('', { name: 'cvcInput', maxLength: 3 });

  const firstPassword = useInput('', {
    name: 'firstPasswordInput',
    maxLength: 1,
  });
  const secondPassword = useInput('', {
    name: 'secondPasswordInput',
    maxLength: 1,
  });

  const monthValidate = (month: string) => {
    return Number(month) <= 12 && Number(month) >= 0;
  };

  const yearValidate = (year: string) => {
    const currentYear = new Date().getFullYear() % 100;
    return Number(year) >= currentYear && Number(year) <= currentYear + 5;
  };

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

    const cardInputValue: cardInputValueInfo = {
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

    const wrongInputs: HTMLInputElement[] = [];

    const validationResult = cardInputKey.every((key: InputKind) => {
      const current = cardInputValue[key];
      const dataList = current.data;

      const result = dataList.every((data) => {
        const isRequiredResult = current.isRequired
          ? data.value.length === current.maxLength
          : true;
        const validationResult = current.validation(data.value);
        const isOverMaxLength = data.value.length > current.maxLength;

        const dataValidationResult =
          isRequiredResult && validationResult && !isOverMaxLength;

        if (!dataValidationResult) {
          wrongInputs.push(data);
          if (!isRequiredResult) {
            current.setError('이 값은 필수 값 입니다. 입력해주세요.');
          } else if (isOverMaxLength) {
            current.setError(
              `이 값은 ${current.maxLength} 길이 만큼 입력 가능합니다.`
            );
          } else if (!validationResult) {
            current.setError(current.errorMessage);
          }
        }

        return dataValidationResult;
      });

      return result;
    });

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
