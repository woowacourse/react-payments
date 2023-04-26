import type { CardType } from '../../types';
import { Page } from '../../types';
import styled from 'styled-components';

import PageTemplate from '../template/PageTemplate';
import Card from '../common/Card';

import { getList } from '../../utils/localStorageUtils';
import { LOCAL_STORAGE_KEY } from '../../constants';

interface Props {
  navigate: (page: Page) => void;
}

const CardListPage = ({ navigate }: Props) => {
  const onClickAdd = () => {
    navigate(Page.register);
  };

  const cardList: CardType[] = getList(LOCAL_STORAGE_KEY.cardList);

  return (
    <PageTemplate title="보유카드">
      {cardList.length === 0 && <GuideMessage>새로운 카드를 등록해주세요</GuideMessage>}
      {cardList.map((card) => (
        <>
          <Card key={card.id} {...card} />
          <CardName>{'내카드'}</CardName>
        </>
      ))}
      <CardAddButton onClick={onClickAdd}>+</CardAddButton>
    </PageTemplate>
  );
};

export default CardListPage;

const GuideMessage = styled.p`
  margin-bottom: 12px;

  font-size: 14px;
  font-weight: 700;
  color: #686868;
`;

const CardName = styled.p`
  margin-top: 16px;
  margin-bottom: 42px;

  text-align: center;
  font-weight: 700;
  font-size: 14px;
  color: #575757;
`;

const CardAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 214px;
  min-height: 134px;
  border: none;
  background: #e5e5e5;
  border-radius: 5px;

  font-size: 30px;
  font-weight: 400;
  color: #575757;

  cursor: pointer;
`;
