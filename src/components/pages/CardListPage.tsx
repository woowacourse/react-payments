import styled from "styled-components";
import Header from "../common/Header";
import Title from "../common/Title";
import AddCardButton from "../CardListPage/AddCardButton";
import CardList from "../CardListPage/CardList";
import { CardPublicInfo } from "../../types/Card";

interface CardListPageProps {
  cardList: CardPublicInfo[];
}

const CardListPage = ({ cardList }: CardListPageProps) => {
  return (
    <div>
      <Header title="보유카드" />
      <ContentContainer>
        {!cardList.length && <Title title="새로운 카드를 등록해주세요." />}
        <CardList cardList={cardList} />
        <AddCardButton />
      </ContentContainer>
    </div>
  );
};

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 0;
`;

export default CardListPage;
