import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { useFormInputs } from '@hooks/useFormInputs';
import { useCardListContext } from '@contexts/useCardContext';
import { useCardInputInfoContext } from '@contexts/useCardInputInfo';
import { usePageContext } from '@contexts/usePageContext';
import { Button } from '@components/common/Button';
import { Card } from '@components/common/Card';
import { Error } from '@components/common/Error';
import { Input } from '@components/common/Input';
import { InputField } from '@components/common/InputField';
import { CardInfo } from '@type/card';
import { createUniqueId } from '@utils/common';
import { formValidate } from '@utils/formValidate';
import { PAGE_KIND } from '@constants/constant';
import { colors } from '@styles/theme';

const INPUT_CARD_TITLE_ID = 'cardTitle';

export default function RegisterCard() {
  const { formInputs } = useFormInputs();
  const { cardList, setCardList } = useCardListContext();
  const { setPage } = usePageContext();
  const { cardInputInfo } = useCardInputInfoContext();

  const { cardTitle } = formInputs.registerPage;

  const createCard = () => {
    const card: CardInfo = {
      id: createUniqueId(),
      title: cardTitle.value,
      ...cardInputInfo,
    };

    const updatedCardList = [card, ...cardList];

    setCardList(updatedCardList);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { validationResult } = formValidate(formInputs.registerPage);

    if (!validationResult) {
      return;
    }

    createCard();

    setPage(PAGE_KIND.HOME);
  };

  return (
    <Wrapper>
      <FinishMessage>카드등록이 완료되었습니다.</FinishMessage>
      <Card
        companyKind={cardInputInfo.company}
        cardNumberSet={[
          cardInputInfo.cardNumber.first,
          cardInputInfo.cardNumber.second,
          cardInputInfo.cardNumber.third,
          cardInputInfo.cardNumber.fourth,
        ]}
        month={cardInputInfo.expirationDate.month}
        year={cardInputInfo.expirationDate.year}
        owner={cardInputInfo.owner}
      />
      <form onSubmit={onSubmit}>
        <InputWrapper>
          <InputField
            id={INPUT_CARD_TITLE_ID}
            text="카드 별칭"
            inputLength={`${cardTitle.value.length}/20`}
          >
            <Input
              id={INPUT_CARD_TITLE_ID}
              autoFocus
              {...cardTitle}
              type="text"
              bgColor={colors.white}
              textAlign="center"
              enterKeyHint="done"
              required
              autoComplete="off"
              maxLength={20}
              placeholder="카드 별칭을 입력해주세요."
            />
          </InputField>
        </InputWrapper>
        <ButtonWrapper>
          <Button text="확인" />
        </ButtonWrapper>
      </form>
      {cardTitle.error && <Error text={cardTitle.error} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 130px 0 0 0;
`;

const FinishMessage = styled.h2`
  margin-bottom: 36px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 124px;
  border-bottom: 1px solid black;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 25px;
  bottom: 25px;
`;
