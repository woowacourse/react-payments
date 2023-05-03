import CardPreview from 'pages/RegisterPage/CardPreview';
import { StyledButton } from 'components/Button';
import { StyledInput } from 'components/Input';
import { AddCardContext } from 'context/CardContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { setLocalStorage } from 'utils/localStorage';
import { Card } from 'types/Card';

const CardNamePage = () => {
  const navigate = useNavigate();

  const { cardNumber, date, name, cardCompany, cardName, setCardName } =
    useContext(AddCardContext);

  const cardInfo: Card = {
    cardNumber: cardNumber,
    date: date,
    name: name,
    cardCompany: cardCompany,
    cardName: cardName,
  };

  const handleCardName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setCardName?.(value);
  };

  const onSubmitHandler = () => {
    setLocalStorage('card', { ...cardInfo });
    navigate('/');
  };

  return (
    <>
      <Container>
        <Span>카드 별칭을 입력하면 등록이 완료됩니다.</Span>
        <CardPreview cardInfo={cardInfo}></CardPreview>
        <form onSubmit={onSubmitHandler}>
          <CardNameInput
            autoFocus
            value={cardName}
            onChange={handleCardName}
            required
          ></CardNameInput>
          <AddButton>등록</AddButton>
        </form>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Span = styled.span`
  margin: 130px 0 40px 0;
  font-size: 20px;
`;

const CardNameInput = styled(StyledInput)`
  width: 40vw;
  margin-top: 40px;
  height: 30px;
  border-bottom: 1px solid #333333;
  background-color: #ffffff;

  &:focus {
    outline: none;
  }
`;

const AddButton = styled(StyledButton)`
  margin-top: 30px;
`;

export default CardNamePage;
