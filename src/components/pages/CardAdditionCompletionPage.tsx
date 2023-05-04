import { useContext } from 'react';
import styled from 'styled-components';
import CardItem from '../CardListPageComponents/CardItem';
import Title from '../common/Title';
import Input from '../common/Input';
import CardLoading from '../CardLoadingComponents/CardLoading';
import { CardContext } from '../../context/CardContext';
import { useCompletion } from '../../hooks/useCompletion';
import { useLoading } from '../../hooks/useLoading';

const CardAdditionCompletionPage = () => {
  const { card, cardName } = useContext(CardContext);
  const { handleComplete, handleInputChange } = useCompletion();
  const { isLoading } = useLoading();

  if (!card) {
    return (
      <CompletionContainer>
        <Error>카드를 찾을 수 없습니다.</Error>
      </CompletionContainer>
    );
  }

  return (
    <CompletionContainer>
      {isLoading ? (
        <CardLoading />
      ) : (
        <>
          <Title title='카드의 별칭을 입력해주세요' fontSize={24} />
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
        </>
      )}
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
