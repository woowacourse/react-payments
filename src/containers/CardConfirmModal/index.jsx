import ReactDOM from 'react-dom';
import { useState } from 'react';
import PageTitle from 'components/PageTitle';
import Card from 'components/Card';
import Form from 'components/Form';
import NextButton from 'components/NextButton';
import FlexColumnBox from 'components/FlexColumnBox';
import styled from 'styled-components';
import Modal from 'components/Modal';
import Backdrop from 'components/Backdrop';

export default function CardConfirmModal({ cardData, onCloseModal, onSubmitForm }) {
  const [nickname, setNickname] = useState(cardData.cardNickname ?? '');

  const onChangeNicknameInput = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <Modal>
          <PageTitle hasPrevButton={true} onClickPrev={onCloseModal}>
            카드 별칭
          </PageTitle>
          <FlexColumnBox>
            <Styled.TitleText>카드 별칭을 입력해주세요.</Styled.TitleText>
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
                placeholder="카드 별칭"
                type="text"
                value={nickname}
              />
              <NextButton disabled={false} color={cardData.cardColor}>
                확인
              </NextButton>
            </Form>
          </FlexColumnBox>
        </Modal>,
        document.getElementById('overlay-root'),
      )}
    </>
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
  `,
};
