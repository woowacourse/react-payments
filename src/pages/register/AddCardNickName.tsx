import styled from 'styled-components';
import { CardViewer } from '../../components/cardViewer';
import {
  useCardInfoActionContext,
  useCardInfoValueContext,
} from '../../hooks/cardInfoContext';
import { Layout } from '../../layout';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useCardList } from '../../hooks/useCardList';
import { useRef, useState } from 'react';
import { RegisterLoading } from '../../components/skeleton/RegisterLoading';

export const AddCardNickName = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { cardNumber, expirationDate, ownerName, companyId, cardId, nickName } =
    useCardInfoValueContext();
  const { setNickName } = useCardInfoActionContext();

  const { setNickNameToCard } = useCardList();

  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Layout>
      <Style.Wrapper
        onSubmit={(e) => {
          e.preventDefault();

          if (!inputRef.current) return;

          setNickNameToCard(cardId, inputRef.current?.value);

          setIsLoading(true);

          setTimeout(() => {
            navigate('/');
          }, 4000);
        }}
      >
        <Style.Header>
          {isLoading
            ? '카드를 등록중입니다!'
            : state === 'modify'
            ? '카드 별명 수정!'
            : '카드 등록이 완료되었습니다!'}
        </Style.Header>
        {isLoading ? (
          <RegisterLoading />
        ) : (
          <>
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
          </>
        )}
      </Style.Wrapper>
    </Layout>
  );
};

const Style = {
  Wrapper: styled.form`
    height: max-content;

    display: flex;
    flex-direction: column;
    align-items: center;

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

    width: 100%;

    background-color: white;
    border-bottom: 1px solid;
    border-radius: 0;
    align-items: flex-end;
    margin-top: 124px;
    font-size: 18px;
    height: max-content;
    text-align: center;
    padding: 5px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    justify-content: flex-end;

    width: 100%;

    margin-top: 50px;
  `,
  Button: styled.button`
    all: unset;

    cursor: pointer;

    font-weight: bold;
  `,
};
