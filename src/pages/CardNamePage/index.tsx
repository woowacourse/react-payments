import { StyledButton } from 'components/Button';
import { StyledInput } from 'components/Input';
import { useCardNameHandler } from './hooks/useCardNameHandler';
import CardPreview from 'pages/RegisterPage/CardPreview';
import styled from 'styled-components';
import Loading from 'components/Loading';

const CardNamePage = () => {
  const { cardInfo, handleCardName, onSubmitHandler, isLoading } =
    useCardNameHandler();

  return (
    <>
      <Container>
        {isLoading ? (
          <Span></Span>
        ) : (
          <Span>카드 별칭을 입력하면 등록이 완료됩니다.</Span>
        )}
        <CardPreview cardInfo={cardInfo} isLoading={isLoading}></CardPreview>
        {isLoading ? (
          <Loading />
        ) : (
          <form onSubmit={onSubmitHandler}>
            <CardNameInput
              autoFocus
              value={cardInfo.cardName}
              onChange={handleCardName}
              required
            ></CardNameInput>
            <AddButton>등록</AddButton>
          </form>
        )}
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
