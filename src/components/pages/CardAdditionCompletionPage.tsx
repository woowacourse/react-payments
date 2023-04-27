import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CardItem from '../common/CardItem';
import Title from '../common/Title';
import Input from '../common/Input';
import { CardItemInfo } from '../../types/Card';
import { cardLocalStorage } from '../domain/CardLocalStorage';

interface CardAdditionCompletionPageProps {
  card: CardItemInfo;
  cardName: string;
  setCardName(value: string): void;
}

const CardAdditionCompletionPage = ({
  card,
  cardName,
  setCardName,
}: CardAdditionCompletionPageProps) => {
  const navigate = useNavigate();

  if (!card) {
    throw new Error('카드를 찾을 수 없습니다.');
  }

  const handleComplete = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCardName((event.target as HTMLInputElement).value);
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
          width={'60%'}
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
  bottom: 0;
  margin-bottom: 1rem;

  padding: 10px 20px;

  background-color: transparent;
  border: none;

  font-weight: 700;
  font-size: 14px;

  align-self: flex-end;
  cursor: pointer;
`;

export default CardAdditionCompletionPage;
