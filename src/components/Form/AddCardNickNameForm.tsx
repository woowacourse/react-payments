import { Card } from 'components/common/Card/types';
import { CreditCard } from 'components/common';
import styled from 'styled-components';
import { FormEventHandler, useRef } from 'react';
import { PaymentsButton } from 'components/common/Button/PaymentsButton';

type Props = { card: Card; onSubmit: (card: Card) => void };

export const AddCardNickNameForm = ({ card, onSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const cardWithNickName: Card = {
      ...card,
      nickName: inputRef.current?.value,
    };

    onSubmit(cardWithNickName);
  };

  return (
    <Container>
      <Text>카드 등록이 완료되었습니다</Text>
      <CreditCard card={card} />
      <FormContainer onSubmit={handleSubmit}>
        <NickNameInput placeholder="별명을 적어주세요" ref={inputRef} autoFocus />
        <PaymentsButton type="submit" bankCode={card.bankCode}>
          확인
        </PaymentsButton>
      </FormContainer>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 30px;
`;

const Text = styled.p`
  font-size: 24px;
  margin-bottom: 36px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const NickNameInput = styled.input`
  margin-top: 90px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  text-align: center;
  font-size: 18px;
  width: 280px;
`;
