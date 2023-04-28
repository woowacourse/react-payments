import { useContext } from 'react';

import { CardInfo } from '../../types/state';
import CardInfoListContext from '../../contexts/CardInfoContext';

import * as styled from './CardList.styled';
import Card from '../Card/Card';
import { useNavigationTo } from '../../hooks/useNavigationTo';
import { PATHNAME } from '../../constants/pathname';

const CardList = () => {
  const { cardInfoList } = useContext(CardInfoListContext);
  const navigationToAliasPage = useNavigationTo(PATHNAME.CARD_ALIAS);

  const onClick = () => {
    navigationToAliasPage();
  };

  const generateCardList = (cardInfoList: CardInfo[]) => {
    return cardInfoList.map(cardInfo => {
      const key = Object.values(cardInfo.cardNumbers).join('');

      return (
        <styled.CardContainer key={cardInfo.cardCompany.name + key} onClick={onClick}>
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
