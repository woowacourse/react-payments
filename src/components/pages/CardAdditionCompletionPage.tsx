import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CardItem from '../CardListPageComponents/CardItem';
import Title from '../common/Title';
import Input from '../common/Input';
import { cardLocalStorage } from '../domain/CardLocalStorage';
import { CardContext } from '../../context/CardContext';

const CardAdditionCompletionPage = () => {
  const navigate = useNavigate();
  const { card, cardName, setCardName, updateCardList } =
    useContext(CardContext);

  if (!card) {
    return (
      <CompletionContainer>
        <Error>카드를 찾을 수 없습니다.</Error>
      </CompletionContainer>
    );
  }

  const handleComplete = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCardName((event.target as HTMLInputElement).value);
    updateCardList(card);
    cardLocalStorage.addCard(card);
    navigate('/');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(event.target.value);
  };

  return (
    <CompletionContainer>
      <Title title='카드등록이 완료되었습니다.' fontSize={24} />
      <CardItemContainer>
        <CardItem card={card} />
      </CardItemContainer>
      <form onSubmit={handleComplete}>
        <Input
          value={cardName}
          borderBottom='1px solid var(--black-color)'
          onChange={handleInputChange}
        />
        <CheckBtn>확인</CheckBtn>
      </form>
    </CompletionContainer>
  );
};

const CompletionContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 130px;
`;

const CardItemContainer = styled.div`
  margin: 36px 0 124px 0;
`;

const CheckBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0 26px 16px 0;

  padding: 10px 20px;

  background-color: transparent;
  border: none;

  font-weight: 700;
  font-size: 14px;

  align-self: flex-end;
  cursor: pointer;
`;

const Error = styled.p`
  font-size: 20px;
  color: var(--red-color);
`;

export default CardAdditionCompletionPage;
