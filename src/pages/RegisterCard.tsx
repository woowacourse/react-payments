import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card/Card';
import Layout from '../components/Layout/Layout';
import Loading from '../components/Loading/Loading';
import { CardContext } from '../context/CardProvider';
import { useCards } from '../hooks';

const RegisterCard = () => {
  const navigate = useNavigate();
  const { handleSetCards } = useCards();
  const { card } = useContext(CardContext);
  const { cardNumbers, expiredDate, cardOwnerName, cardCompany } = card;
  const [nickname, setNickname] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleNicknameInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = (e) => {
    const { value } = e.target;
    setNickname(value);
  };

  const handleConfirmButton = () => {
    const newCard = { ...card, nickname: nickname };
    handleSetCards(newCard);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 4000);
  };

  return (
    <Layout>
      {isLoading ? (
        <Wrapper>
          <Loading />
          <LoadingMessage>카드를 등록중입니다.</LoadingMessage>
        </Wrapper>
      ) : (
        <>
          <Wrapper>
            <Title>거의 다 왔어요!</Title>
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
        </>
      )}
    </Layout>
  );
};

const Title = styled.h3`
  margin-bottom: 36px;
`;

const LoadingMessage = styled.p`
  font: ${(props) => props.theme.font.subtitle};
  color: ${(props) => props.theme.color.grey400};
  margin-top: 42px;
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
