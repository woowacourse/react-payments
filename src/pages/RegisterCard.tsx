import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card/Card';
import Layout from '../components/Layout/Layout';
import { CardContext } from '../context/CardProvider';
import { useCards } from '../hooks';

const RegisterCard = () => {
  const navigate = useNavigate();
  const { handleSetCards } = useCards();
  const { card } = useContext(CardContext);
  const { cardNumbers, expiredDate, cardOwnerName, cardCompany } = card;
  const [nickname, setNickname] = useState('');

  const handleNicknameInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (e) => {
    const { value } = e.target;
    setNickname(value);
  };

  const handleConfirmButton = () => {
    const newCard = { ...card, nickname: nickname };
    handleSetCards(newCard);
    navigate('/');
  };

  return (
    <Layout>
      <Wrapper>
        <Title>카드 등록이 완료되었습니다.</Title>
        <Card
          cardNumbers={cardNumbers}
          expiredDate={expiredDate}
          cardOwnerName={cardOwnerName}
          cardCompany={cardCompany}
        />
        <Input
          value={nickname}
          onChange={handleNicknameInputChange}
          placeholder="카드 별칭을 입력해주세요.(선택)"
        />
      </Wrapper>
      <ButtonWrapper>
        <button onClick={handleConfirmButton}>확인</button>
      </ButtonWrapper>
    </Layout>
  );
};

const Title = styled.h2`
  margin-bottom: 36px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 130px;
`;

const Input = styled.input`
  width: 244px;
  margin-top: 124px;
  border-bottom: 1px solid black;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  margin-top: 172px;
  cursor: pointer;
`;

export default RegisterCard;
