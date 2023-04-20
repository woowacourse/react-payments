import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CardPreview from './CardPreview';
import Input from './Input';
import { useCardDispatch } from '../context/CardContext';
import { isAlphabet, isNumber, regEx, validateMonth, validateYear } from '../utils/validateInput';
import ErrorMessage from './ErrorMessage';

const AddCardContainer = () => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [cardExpirationDate, setCardExpirationDate] = useState<string[]>(['', '']);
  const [cardOwner, setCardOwner] = useState<string[]>(['']);
  const [cardCVC, setCardCVC] = useState<string[]>(['']);
  const [cardPWD, setCardPWD] = useState<string[]>(['', '']);
  const [expirationError, setExpirationError] = useState<boolean>(false);
  const setCard = useCardDispatch();
  const navigate = useNavigate();

  const onChangeDateState = (e: ChangeEvent) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    switch (e.target.dataset.id) {
      case '0':
        validateMonth(e.target);
        break;
      case '1':
        validateYear(e.target);
        break;
      default:
    }

    onChangeState(cardExpirationDate, setCardExpirationDate, 'number')(e);
  };

  const onChangeState =
    (state: string[], setState: React.Dispatch<React.SetStateAction<string[]>>, type: string) =>
    (e: ChangeEvent) => {
      if (!(e.target instanceof HTMLInputElement)) return;

      switch (type) {
        case 'number':
        case 'password':
          if (!isNumber(e.target.value))
            e.target.value = e.target.value.replace(regEx.notNumber, '');
          break;
        case 'text':
          if (!isAlphabet(e.target.value))
            e.target.value = e.target.value.replace(regEx.notAlphbet, '');
          break;
        default:
      }

      const copyState = [...state];
      copyState[Number(e.target.dataset.id)] = e.target.value;
      setState(copyState);
    };

  const onSubmitCard = (e: React.FormEvent) => {
    e.preventDefault();

    const today = new Date();
    const expirationDate = new Date(`20${[...cardExpirationDate].reverse().join('-')}`);

    if (today > expirationDate) {
      setExpirationError(true);
    } else {
      setExpirationError(false);
      successSubmit();
    }
  };

  const successSubmit = () => {
    setCard((prev) => {
      return [...prev, { cardNumbers, cardExpirationDate, cardOwner, cardCVC, cardPWD }];
    });

    navigate('/');
    setExpirationError(false);
  };

  useEffect(() => {
    console.log(cardNumbers, cardExpirationDate, cardCVC, cardPWD, cardOwner);
  }, [cardNumbers, cardExpirationDate, cardCVC, cardPWD, cardOwner]);

  return (
    <AddCardContainerWrapper>
      <CardPreview
        cardNumbers={cardNumbers}
        cardOwner={cardOwner}
        cardExpirationDate={cardExpirationDate}
      />
      <StyledForm onSubmit={onSubmitCard}>
        <Input
          labelText="카드 번호"
          inputInfoList={[
            {
              type: 'number',
              minLength: 4,
              maxLength: 4,
              width: '75px',
              center: true,
              onChange: onChangeState(cardNumbers, setCardNumbers, 'number'),
            },
            {
              type: 'number',
              minLength: 4,
              maxLength: 4,
              width: '75px',
              center: true,
              onChange: onChangeState(cardNumbers, setCardNumbers, 'number'),
            },
            {
              type: 'password',
              minLength: 4,
              maxLength: 4,
              width: '75px',
              center: true,
              onChange: onChangeState(cardNumbers, setCardNumbers, 'password'),
            },
            {
              type: 'password',
              minLength: 4,
              maxLength: 4,
              width: '75px',
              center: true,
              onChange: onChangeState(cardNumbers, setCardNumbers, 'password'),
            },
          ]}
        />
        <Input
          labelText="만료일"
          inputInfoList={[
            {
              type: 'number',
              placeholder: 'MM',
              minLength: 2,
              maxLength: 2,
              width: '75px',
              center: true,
              onChange: onChangeDateState,
            },
            {
              type: 'number',
              placeholder: 'YY',
              minLength: 2,
              maxLength: 2,
              width: '75px',
              center: true,
              onChange: onChangeDateState,
            },
          ]}
        />
        {expirationError && <ErrorMessage message="유효한 카드 만료일을 입력해주세요." />}
        <Input
          labelText="카드 소유자 이름(선택)"
          inputInfoList={[
            {
              type: 'text',
              placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
              minLength: 0,
              maxLength: 30,
              width: '100%',
              center: false,
              onChange: onChangeState(cardOwner, setCardOwner, 'text'),
            },
          ]}
        >
          <p>{cardOwner[0].length} / 30</p>
        </Input>
        <StyledHeightCenter>
          <Input
            labelText="보안 코드(CVC/CVV)"
            inputInfoList={[
              {
                type: 'password',
                minLength: 3,
                maxLength: 3,
                width: '75px',
                center: false,
                onChange: onChangeState(cardCVC, setCardCVC, 'password'),
              },
            ]}
          />
          <StyledHelperButton disabled>?</StyledHelperButton>
        </StyledHeightCenter>
        <StyledHeightCenter>
          <Input
            labelText="카드 비밀번호"
            inputInfoList={[
              {
                type: 'password',
                minLength: 1,
                maxLength: 1,
                width: '40px',
                center: false,
                onChange: onChangeState(cardPWD, setCardPWD, 'password'),
              },
              {
                type: 'password',
                minLength: 1,
                maxLength: 1,
                width: '40px',
                center: false,
                onChange: onChangeState(cardPWD, setCardPWD, 'password'),
              },
            ]}
          />
          <StyledDotWrapper>
            <StyledDot />
          </StyledDotWrapper>
          <StyledDotWrapper>
            <StyledDot />
          </StyledDotWrapper>
        </StyledHeightCenter>
        <StyledSubmitButton type="submit">다음</StyledSubmitButton>
      </StyledForm>
    </AddCardContainerWrapper>
  );
};

const AddCardContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledForm = styled.form`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
`;

const StyledSubmitButton = styled.button`
  align-self: end;
  border: none;
  background-color: transparent;
  margin-top: 4px;
  padding: 8px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`;

const StyledHelperButton = styled.button`
  width: 28px;
  height: 28px;
  cursor: pointer;

  color: #969696;
  border: 1px solid #bababa;
  background-color: #fff;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 500;

  margin-top: 14px;
`;

const StyledHeightCenter = styled.div`
  display: flex;
  align-items: center;

  margin-top: 18px;
`;

const StyledDotWrapper = styled.div`
  margin-left: 8px;
  width: 40px;
  height: 40px;

  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDot = styled.div`
  width: 5px;
  height: 5px;

  border-radius: 50%;
  background-color: black;
`;

export default AddCardContainer;
