import { CardInfo } from '../../App';
import * as styled from './MyCardPage.styled';
import { useNavigate } from 'react-router-dom';

const MyCardPage = ({ cardList }: { cardList: CardInfo[] }) => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation('/register');
  };

  return (
    <styled.MyCardPage>
      <styled.CardRegisterButtonContainer>
        <p>새로운 카드를 등록해 주세요.</p>
        <styled.Card color="black" shadow="0" onClick={handleClick}>
          <styled.ButtonIcon>+</styled.ButtonIcon>
        </styled.Card>
      </styled.CardRegisterButtonContainer>
      <styled.CardList></styled.CardList>
    </styled.MyCardPage>
  );
};

export default MyCardPage;
