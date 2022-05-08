import { useState } from 'react';
import PageTitle from 'components/PageTitle/PageTitle';
import Card from 'components/Card/Card';
import Form from 'common/Form/Form';
import NextButton from 'components/NextButton/NextButton';
import FlexColumnBox from 'components/FlexColumnBox/FlexColumnBox';
import styled from 'styled-components';
import ModalOverlay from 'common/Modal/ModalOverlay';

export default function CardConfirmModal({ cardData, onCloseModal, onSubmitForm }) {
  const [nickname, setNickname] = useState(cardData.cardNickname ?? '');

  const onChangeNicknameInput = (e) => {
    setNickname(e.target.value);
  };

  return (
    <ModalOverlay>
      <PageTitle hasPrevButton={true} onClickPrev={onCloseModal}>
        카드명 수정
      </PageTitle>
      <FlexColumnBox>
        <Styled.TitleText>카드명을 입력해주세요.</Styled.TitleText>
        <Card
          cardName={cardData.cardName}
          cardColor={cardData.cardColor}
          cardNumber={cardData.cardNumber}
          cardExpiration={cardData.cardExpiration}
          cardOwner={cardData.cardOwner}
          isSmall={false}
        />
        <Form onSubmitForm={onSubmitForm(cardData)} nickname={nickname}>
          <Styled.UnderlineInput
            onChange={onChangeNicknameInput}
            placeholder="카드명"
            type="text"
            value={nickname}
            autoFocus={true}
          />
          <NextButton disabled={false} color={cardData.cardColor}>
            확인
          </NextButton>
        </Form>
      </FlexColumnBox>
    </ModalOverlay>
  );
}

const Styled = {
  TitleText: styled.p`
    font-size: 24px;
  `,

  UnderlineInput: styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 5px;
    color: #525252;

    box-sizing: border-box;
    text-align: center;
    width: 310px;
    font-size: 24px;
    margin: 30px;
    font-weight: normal;

    &:focus {
      border-bottom: 2px solid #555;
      outline: none;
    }

    &::placeholder {
      color: #c5c3c3;
    }
  `,
};
