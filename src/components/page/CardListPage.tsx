import styled from 'styled-components';
import { CardType, Page, PageProps } from '../../abstracts/types';
import Card from '../common/Card';
import PageTemplate from '../template/PageTemplate';
import useLocalStorage from '../../hooks/useLocalStorage';
import { CARD_LIST_STORAGE_KEY } from '../../abstracts/constants';

const CardListPage = ({ navigate }: PageProps) => {
  const onClickAdd = () => {
    navigate(Page.register);
  };

  const { getLocalStorage: cardList } = useLocalStorage<CardType[]>(CARD_LIST_STORAGE_KEY);

  return (
    <PageTemplate title="보유카드">
      {!cardList && <GuideMessage>새로운 카드를 등록해주세요</GuideMessage>}
      <CardList>{cardList && cardList.map((card) => <Card key={card.id} {...card} />)}</CardList>
      <CardAddButton onClick={onClickAdd}>+</CardAddButton>
    </PageTemplate>
  );
};

export default CardListPage;

const CardList = styled.div`
  & > * {
    margin-bottom: 46px;
  }
`;

const GuideMessage = styled.p`
  margin-bottom: 12px;

  font-size: 14px;
  font-weight: 700;
  color: #686868;
`;

const CardAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 214px;
  height: 134px;

  font-size: 30px;
  font-weight: 400;
  color: #575757;

  background: #e5e5e5;
  border-radius: 5px;

  border: none;
  cursor: pointer;
`;
