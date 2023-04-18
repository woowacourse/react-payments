import styled from 'styled-components';
import Header from '../common/Header';
import Title from '../common/Title';
import AddCardButton from '../CardListPageComponents/AddCardButton';

const CardListPage = () => {
  return (
    <div>
      <Header title='보유카드' />
      <ContentContainer>
        <Title title='새로운 카드를 등록해주세요.' />
        <AddCardButton />
      </ContentContainer>
    </div>
  );
};

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default CardListPage;
