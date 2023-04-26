import { useNavigate } from 'react-router-dom';
import CardItem from '../common/CardItem';
import Title from '../common/Title';
import { cardLocalStorage } from '../domain/CardLocalStorage';

interface test {
  newCardId: number;
}

const CardAdditionCompletionPage = ({ newCardId }: test) => {
  const navigate = useNavigate();
  const card = cardLocalStorage.getCard(newCardId);

  if (!card) {
    throw new Error('카드를 찾을 수 없습니다.');
  }

  const handleComplete = () => {
    navigate('/');
  };

  return (
    <>
      <Title title='카드등록이 완료되었습니다.' fontSize={24} />
      <CardItem card={card} />
      <button onClick={handleComplete}>확인</button>
    </>
  );
};

export default CardAdditionCompletionPage;
