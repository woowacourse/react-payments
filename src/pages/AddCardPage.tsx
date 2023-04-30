import React, { FormEvent, useEffect, useRef, useState } from 'react';
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
  isPrevDate,
  setNextInputFocus,
  userConfirm,
} from '../utils';
import { BankType, CardInfo, PageInfo } from '../types';
import { useFormInputs } from '../hooks/useFormInputs';
import Modal from '../components/common/Modal';
import SelectBank from '../components/card/SelectBank';
import { useHideScrollState } from '../hooks/useHideScrollState';
import ChangeButton from '../components/common/ChangeButton';
import { BANK_DATA } from '../constant';
import RegisteredCard from '../components/card/RegisteredCard';
import { InputValuesInformationProps } from '../hooks/createFormInputValue';
import { getFormValidateResult } from '../hooks/getFormValidateResult';

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
  const [bank, setBank] = useHideScrollState<BankType>('default', (value) => {
    return value === 'default';
  });

  const onBankHanlder = (value: BankType) => {
    setNextInputFocus(cardForm.current);
    setBank(value);
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

    const inputInformation: InputValuesInformationProps[] = [
      { ...firstCardNumber, element: firstCardInput },
      { ...secondCardNumber, element: secondCardInput },
      { ...thirdCardNumber, element: thirdCardInput },
      { ...fourthCardNumber, element: fourthCardInput },
      { ...month, element: monthInput },
      { ...year, element: yearInput },
      { ...owner, element: ownerInput },
      { ...cvc, element: cvcInput },
      { ...firstPassword, element: firstPasswordInput },
      { ...secondPassword, element: secondPasswordInput },
    ];

    const { validationResult } = getFormValidateResult(inputInformation);

    if (!validationResult) {
      return;
    }

    if (isPrevDate(Number(yearInput.value), Number(monthInput.value))) {
      monthInput.focus();
      month.setError('지난 기간은 입력할 수 없습니다.');
      return;
    }

    setIsRegister(true);
  };

  const createCard = () => {
    const newCard: CardInfo = {
      id: createUniqueId(),
      bank,
      title: cardTitle.value,
      cardNumber: {
        fisrt: firstCardNumber.value,
        second: secondCardNumber.value,
        third: '&&&&',
        fourth: '&&&&',
      },
      expiracy: {
        month: month.value,
        year: year.value,
      },
      owner: owner.value.toUpperCase(),
    };

    const updatedCardList = [...cardList, newCard];

    setCardList(updatedCardList);

    setPage('homePage');
  };

  const onPrevButtonClick = () => {
    userConfirm(
      '이전 페이지로 이동하시면 현재 입력하신 내용이 사라집니다. 정말 이동하시겠습니까?',
      setHome
    );
  };

  const setHome = () => {
    setPage('homePage');
  };

  useEffect(() => {
    const setHomepage = () => {
      userConfirm(
        '이전 페이지로 이동하시면 현재 입력하신 내용이 사라집니다. 정말 이동하시겠습니까?',
        () => setPage('homePage')
      );
    };

    window.history.pushState(null, '', window.location.href);

    window.addEventListener('popstate', setHomepage);

    return () => {
      window.removeEventListener('popstate', setHomepage);
    };
  }, [setPage]);

  if (isRegister) {
    return (
      <RegisteredCard
        createCard={createCard}
        cardTitle={cardTitle}
        bankKind={bank}
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
    <Container>
      <Page>
        <TitleWrapper>
          <PrevButton onClick={onPrevButtonClick} />
          <Title>카드 추가</Title>
        </TitleWrapper>
        <CardWrapper>
          <Card
            bankKind={bank}
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
            <ChangeButton
              color={BANK_DATA[bank].color}
              bgColor={BANK_DATA[bank].backgroundColor}
              text="카드 변경"
              onClick={() => setBank('default')}
            />
          </ChangeButtonWrapper>
        </CardWrapper>
        <InputWrapperParent
          onSubmit={onCardInfoSubmit}
          ref={cardForm}
          onKeyDown={(e) => onInputKeydown(e)}
        >
          <InputWrapper>
            <InputField text="카드 번호">
              <CardNumberInput
                firstNumber={firstCardNumber}
                secondNumber={secondCardNumber}
                thirdNumber={thirdCardNumber}
                fourthNumber={fourthCardNumber}
              />
            </InputField>
            <InputField text="만료일">
              <ExpiracyInput year={year} month={month} />
            </InputField>
            <InputField
              text="카드 소유자 이름(선택)"
              inputLength={`${owner.value.length}/30`}
            >
              <OwnerInput owner={owner} />
            </InputField>
            <InputField text="보안 코드(CVC/CVV)">
              <CvcWrapper>
                <CvcInput cvc={cvc} />
              </CvcWrapper>
            </InputField>
            <InputField text="카드 비밀번호">
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
      {bank === 'default' && (
        <Modal>
          <SelectBank onClick={onBankHanlder} />
        </Modal>
      )}
    </Container>
  );
}

const Container = styled.div``;

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
