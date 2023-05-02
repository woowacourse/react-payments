import styled from 'styled-components';
import { CardViewer } from '../../components/cardViewer';
import {
  useCardInfoActionContext,
  useCardInfoValueContext,
} from '../../hooks/cardInfoContext';
import { Layout } from '../../layout';
import { Input } from '../../components/addCardForm/cardInfoInputs/template/Input';
import { useNavigate } from 'react-router-dom';
import { useCardList } from '../../hooks/useCardList';
import { useRef } from 'react';

export const AddCardNickName = () => {
  const navigate = useNavigate();

  const { cardNumber, expirationDate, ownerName, companyId, cardId, nickName } =
    useCardInfoValueContext();
  const { setNickName } = useCardInfoActionContext();

  const { setNickNameToCard } = useCardList();

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Layout>
      <Style.Wrapper
        onSubmit={(e) => {
          e.preventDefault();

          if (!inputRef.current) return;

          setNickNameToCard(cardId, inputRef.current?.value);

          navigate('/');
        }}
      >
        <Style.Header>카드 등록이 완료되었습니다!</Style.Header>
        <Style.CardWrapper>
          <CardViewer
            cardNumber={cardNumber}
            expirationDate={expirationDate}
            ownerName={ownerName}
            companyId={companyId}
          />
        </Style.CardWrapper>
        <Style.NickNameInput
          ref={inputRef}
          autoFocus={true}
          onChange={(e) => setNickName(e.target.value)}
          value={nickName ?? ''}
          placeholder="카드 별명"
        />
        <Style.ButtonWrapper>
          <Style.Button>확인</Style.Button>
        </Style.ButtonWrapper>
      </Style.Wrapper>
    </Layout>
  );
};

const Style = {
  Wrapper: styled.form`
    height: max-content;

    display: flex;
    flex-direction: column;

    position: fixed;
    top: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
  `,
  Header: styled.h1`
    all: unset;

    width: max-content;

    font-size: 24px;
    text-align: center;
    margin-bottom: 36px;
  `,
  CardWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
  NickNameInput: styled.input`
    all: unset;

    background-color: white;
    border-bottom: 1px solid;
    border-radius: 0;
    align-items: flex-end;
    margin-top: 124px;
    font-size: 18px;
    height: max-content;
    padding: 5px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: flex-end;

    margin-top: 50px;
  `,
  Button: styled.button`
    all: unset;

    font-weight: bold;
  `,
};
