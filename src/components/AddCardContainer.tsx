import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CardPreview from './CardPreview';
import Input from './Input';
import { useCardDispatch } from '../context/CardContext';
import { isAlphabet, isNumber, regEx } from '../utils/validateInput';

const AddCardContainer = () => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [cardExpirationDate, setCardExpirationDate] = useState<string[]>(['', '']);
  const [cardOwner, setCardOwner] = useState<string[]>(['']);
  const [cardCVC, setCardCVC] = useState<string[]>(['']);
  const [cardPWD, setCardPWD] = useState<string[]>(['', '']);
  const setCard = useCardDispatch();
  const navigate = useNavigate();

  const onChangeState =
    (state: string[], setState: React.Dispatch<React.SetStateAction<string[]>>) =>
    (e: ChangeEvent) => {
      if (!(e.target instanceof HTMLInputElement)) return;

      switch (e.target.type) {
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

  const onSubmitCard = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    setCard((prev) => {
      return [...prev, { cardNumbers, cardExpirationDate, cardOwner, cardCVC, cardPWD }];
    });
    navigate('/');
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
      <StyledForm>
        <Input
          labelText="카드 번호"
          inputInfoList={[
            {
              type: 'number',
              maxLength: 4,
              width: '75px',
              center: true,
              onChange: onChangeState(cardNumbers, setCardNumbers),
            },
            {
              type: 'number',
              maxLength: 4,
              width: '75px',
              center: true,
              onChange: onChangeState(cardNumbers, setCardNumbers),
            },
            {
              type: 'password',
              maxLength: 4,
              width: '75px',
              center: true,
              onChange: onChangeState(cardNumbers, setCardNumbers),
            },
            {
              type: 'password',
              maxLength: 4,
              width: '75px',
              center: true,
              onChange: onChangeState(cardNumbers, setCardNumbers),
            },
          ]}
        />
        <Input
          labelText="만료일"
          inputInfoList={[
            {
              type: 'number',
              placeholder: 'MM',
              maxLength: 2,
              width: '75px',
              center: true,
              onChange: onChangeState(cardExpirationDate, setCardExpirationDate),
            },
            {
              type: 'number',
              placeholder: 'YY',
              maxLength: 2,
              width: '75px',
              center: true,
              onChange: onChangeState(cardExpirationDate, setCardExpirationDate),
            },
          ]}
        />
        <Input
          labelText="카드 소유자 이름(선택)"
          inputInfoList={[
            {
              type: 'text',
              placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
              maxLength: 30,
              width: '100%',
              center: false,
              onChange: onChangeState(cardOwner, setCardOwner),
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
                maxLength: 3,
                width: '75px',
                center: false,
                onChange: onChangeState(cardCVC, setCardCVC),
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
                maxLength: 1,
                width: '40px',
                center: false,
                onChange: onChangeState(cardPWD, setCardPWD),
              },
              {
                type: 'password',
                maxLength: 1,
                width: '40px',
                center: false,
                onChange: onChangeState(cardPWD, setCardPWD),
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
        <StyledSubmitButton onClick={onSubmitCard}>다음</StyledSubmitButton>
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
