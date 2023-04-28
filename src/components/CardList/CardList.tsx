import { MouseEvent, useContext } from 'react';

import CardInfoListContext from '../../contexts/CardInfoContext';

import { CardInfoList } from '../../types/state';
import { PATHNAME } from '../../constants/pathname';
import { useInitCardInfo } from '../../hooks/useInitCardInfo';
import { useNavigationTo } from '../../hooks/useNavigationTo';

import * as styled from './CardList.styled';
import Card from '../Card/Card';
import { generateCardKey } from '../../domains/keyGenerator';

const CardList = () => {
  const { cardInfoList } = useContext(CardInfoListContext);
  const initCardInfo = useInitCardInfo();
  const { navigationTo } = useNavigationTo(PATHNAME.CARD_ALIAS);

  const onClick = ({ currentTarget }: MouseEvent<HTMLDivElement>) => {
    if (currentTarget.dataset.cardInfo) {
      const cardInfo = JSON.parse(currentTarget.dataset.cardInfo);
      initCardInfo(cardInfo);
      navigationTo();
    }
  };

  const generateCardList = (cardInfoList: CardInfoList) => {
    return Object.values(cardInfoList).map(cardInfo => {
      const key = generateCardKey(cardInfo);

      return (
        <styled.CardContainer
          key={cardInfo.cardCompany.name + key}
          onClick={onClick}
          data-card-info={JSON.stringify(cardInfo)}
        >
          <Card
            key={cardInfo.cardCompany.name + key}
            cardInfo={cardInfo}
            theme={cardInfo.cardCompany.theme}
          />
          {cardInfo.cardAlias && (
            <styled.CardAlias key={cardInfo.cardCompany.name + key + cardInfo.cardAlias}>
              {cardInfo.cardAlias}
            </styled.CardAlias>
          )}
        </styled.CardContainer>
      );
    });
  };

  return <>{cardInfoList && <styled.CardList>{generateCardList(cardInfoList)}</styled.CardList>}</>;
};

export default CardList;
