import { MouseEvent, useContext } from 'react';

import CardInfoListContext from '../../contexts/CardInfoContext';

import { CardInfoList } from '../../types/state';
import { PATHNAME } from '../../constants/pathname';
import { generateCardKey } from '../../domains/keyGenerator';
import { useInitCardInfo } from '../../hooks/useInitCardInfo';
import { useNavigationTo } from '../../hooks/useNavigationTo';

import * as styled from './CardList.styled';
import Card from '../Card/Card';

const CardList = () => {
  const { cardInfoList } = useContext(CardInfoListContext);
  const { navigationTo } = useNavigationTo(PATHNAME.CARD_ALIAS);
  const initCardInfo = useInitCardInfo();

  const onClick = ({ currentTarget }: MouseEvent<HTMLDivElement>) => {
    if (!currentTarget.dataset.cardInfo) {
      return;
    }

    const cardInfo = JSON.parse(currentTarget.dataset.cardInfo);
    initCardInfo(cardInfo);
    navigationTo();
  };

  const generateCardList = (cardInfoList: CardInfoList) => {
    return Object.values(cardInfoList).map(cardInfo => {
      const key = generateCardKey(cardInfo);
      const data = JSON.stringify(cardInfo);

      return (
        <styled.CardContainer key={key + 'container'} onClick={onClick} data-card-info={data}>
          <Card key={key + 'card'} cardInfo={cardInfo} theme={cardInfo.cardCompany.theme} />
          {cardInfo.cardAlias && (
            <styled.CardAlias key={key + 'alias'}>{cardInfo.cardAlias}</styled.CardAlias>
          )}
        </styled.CardContainer>
      );
    });
  };

  return <>{cardInfoList && <styled.CardList>{generateCardList(cardInfoList)}</styled.CardList>}</>;
};

export default CardList;
