import React, { FormEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useInput } from '../hooks/useInput';
import PrevButton from '../components/common/PrevButton';
import Card from '../components/card/Card';
import InputField from '../components/common/InputField';
import CardNumberInput from '../components/card/input/CardNumberInput';
import ExpiracyInput from '../components/card/input/ExpiracyInput';
import OwnerInput from '../components/card/input/OwnerInput';
import CvcInput from '../components/card/input/CvcInput';
import InformationButton from '../components/common/InformationButton';
import ToolTip from '../components/common/ToolTip';
import PasswordInput from '../components/card/input/PasswordInput';
import NextButton from '../components/common/NextButton';
import { useFocusInput } from '../hooks/useFocusInput';
import { isNumber, isOnlyKoreanAndEnglish } from '../utils';
import { CardInfo } from '../types';

interface AddCardPageProps {
  cardList: CardInfo[];
  setCardList: (data: CardInfo[]) => void;
  setPage: React.Dispatch<React.SetStateAction<'homePage' | 'addCardPage'>>;
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
}

type InputKind = 'card' | 'cvc' | 'owner' | 'password' | 'month' | 'year';

const Page = styled.div`
  position: relative;
  width: 375px;
  border: 1px solid;
  min-height: 100vh;
  padding: 20px 28px;
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
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const InputWrapperParent = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
const CvcWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const CvcButtonWrapper = styled.div`
  position: relative;
  margin-left: 11px;
`;
const NextButtonWrapper = styled.div`
  position: absolute;
  right: 25px;
  bottom: 25px;
`;

export default function AddCardPage({
  cardList,
  setCardList,
  setPage,
}: AddCardPageProps) {
  const cardForm = useRef<HTMLFormElement>(null);
  const { onInputKeydown } = useFocusInput(cardForm);
  const firstCardNumber = useInput('', {
    name: 'firstCardNumber',
    maxLength: 4,
  });
  const secondCardNumber = useInput('', {
    name: 'secondCardNumber',
    maxLength: 4,
  });
  const thirdCardNumber = useInput('', {
    name: 'thirdCardNumber',
    maxLength: 4,
  });
  const fourthCardNumber = useInput('', {
    name: 'fourthCardNumber',
    maxLength: 4,
  });

  const year = useInput('', {
    name: 'year',
    errorMessage: '카드의 연도를 확인해주세요',
    maxLength: 2,
  });
  const month = useInput('', {
    name: 'month',
    errorMessage: '카드의 달을 확인해주세요.',
    maxLength: 2,
  });

  const owner = useInput('', {
    name: 'owner',
    validate: isOnlyKoreanAndEnglish,
    maxLength: 30,
  });
  const cvc = useInput('', { name: 'cvc', maxLength: 3 });

  const firstPassword = useInput('', { name: 'firstPassword', maxLength: 1 });
  const secondPassword = useInput('', { name: 'secondPassword', maxLength: 1 });

  const [isOpenToolTip, setIsOpenToolTip] = useState(false);

  const [isFormfilled, setIsFormfilled] = useState(true);

  const monthValidate = (month: string) => {
    return Number(month) <= 12 && Number(month) >= 0;
  };

  const yearValidate = (year: string) => {
    const currentYear = new Date().getFullYear() % 100;
    return Number(year) >= currentYear && Number(year) <= currentYear + 5;
  };

  const handleToolTip = () => {
    setIsOpenToolTip((prev) => !prev);
  };

  const onCardInfoSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
    } = event.currentTarget;

    const cardInputValue: cardInputValueInfo = {
      card: {
        data: [
          firstCardNumber,
          secondCardNumber,
          thirdCardNumber,
          fourthCardNumber,
        ],
        maxLength: 4,
        isRequired: true,
        validation: isNumber,
      },
      month: {
        data: [month],
        maxLength: 2,
        isRequired: true,
        validation: monthValidate,
      },
      year: {
        data: [year],
        maxLength: 2,
        isRequired: true,
        validation: yearValidate,
      },
      cvc: {
        data: [cvc],
        maxLength: 3,
        isRequired: true,
        validation: isNumber,
      },
      owner: {
        data: [owner],
        maxLength: 30,
        isRequired: false,
        validation: isOnlyKoreanAndEnglish,
      },
      password: {
        data: [firstPassword, secondPassword],
        maxLength: 1,
        isRequired: true,
        validation: isNumber,
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
        const requiredResult = current.isRequired
          ? data.value.length === current.maxLength
          : true;
        const validationResult = current.validation(data.value);

        const dataValidationResult = requiredResult && validationResult;

        if (!dataValidationResult) {
          wrongInputs.push(data);
        }

        return dataValidationResult;
      });
      return result;
    });

    if (!validationResult) {
      wrongInputs[0].focus();
      return;
    }

    const newCard: CardInfo = {
      cardNumber: {
        fisrt: firstCardNumber.value,
        second: secondCardNumber.value,
        third: thirdCardNumber.value,
        fourth: fourthCardNumber.value,
      },
      expiracy: {
        month: month.value,
        year: year.value,
      },
      owner: owner.value,
      cvc: cvc.value,
      password: {
        first: firstPassword.value,
        second: secondPassword.value,
      },
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

  useEffect(() => {
    if (!cardForm.current) return;
    setIsFormfilled(!cardForm.current.checkValidity());
  }, [
    firstCardNumber.value,
    secondCardNumber.value,
    thirdCardNumber.value,
    fourthCardNumber.value,
    year.value,
    month.value,
    cvc.value,
    firstPassword.value,
    secondPassword.value,
  ]);

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
          expiracy={`${month.value ? month.value : 'MM'}/${
            year.value ? year.value : 'YY'
          }`}
          owner={owner.value}
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
              <CvcButtonWrapper>
                <InformationButton onClick={handleToolTip} />
                {isOpenToolTip && (
                  <ToolTip
                    text={
                      'CVC번호는 카드 뒷 면에 있는 3자리 숫자이며 카드 보안을 위한 번호입니다'
                    }
                  />
                )}
              </CvcButtonWrapper>
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
          <NextButton isDisable={isFormfilled} />
        </NextButtonWrapper>
      </InputWrapperParent>
    </Page>
  );
}
