import { MouseEvent, useContext } from 'react';

import cardListContext from '../../contexts/CardContext';

import { CardList } from '../../types/state';
import { PATHNAME } from '../../constants/pathname';
import { generateCardKey } from '../../domains/keyGenerator';
import { useInitCard } from '../../hooks/useInitCard';
import { useNavigationTo } from '../../hooks/useNavigationTo';

import * as styled from './CardBoxList.styled';
import CardBox from '../CardBox/CardBox';

const CardBoxList = () => {
  const { cardList } = useContext(cardListContext);
  const { navigationTo } = useNavigationTo(PATHNAME.NICKNAME);
  const initCard = useInitCard();

  const onClick = ({ currentTarget }: MouseEvent<HTMLLIElement>) => {
    if (!currentTarget.dataset.card) {
      return;
    }

    const card = JSON.parse(currentTarget.dataset.card);
    initCard(card);
    navigationTo();
  };

  const generateCardList = (cardList: CardList) => {
    return Object.values(cardList).map(card => {
      const key = generateCardKey(card);
      const data = JSON.stringify(card);

      return (
        <styled.CardBoxItem
          key={key + 'container'}
          data-card-info={data}
          onClick={onClick}
        >
          <CardBox
            key={key + 'card'}
            card={card}
            backgroundColor={card.company.backgroundColor}
          />
          {card.nickname && (
            <styled.NicknameParagraph key={key + 'alias'}>
              {card.nickname}
            </styled.NicknameParagraph>
          )}
        </styled.CardBoxItem>
      );
    });
  };

  return (
    <>
      {cardList && (
        <styled.CardBoxList>{generateCardList(cardList)}</styled.CardBoxList>
      )}
    </>
  );
};

export default CardBoxList;
