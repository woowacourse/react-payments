import { MouseEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import cardListContext from '../../contexts/CardContext';

import { PATHNAME } from '../../constants/pathname';
import { generateCardKey } from '../../domains/keyGenerator';
import { useInitCard } from '../../hooks/useInitCard';

import * as styled from './CardBoxList.styled';
import CardBox from '../CardBox/CardBox';

const CardBoxList = () => {
  const { cardList } = useContext(cardListContext);
  const navigation = useNavigate();
  const initCard = useInitCard();

  const onClickCardBoxItem = ({
    currentTarget: {
      dataset: { cardKey },
    },
  }: MouseEvent<HTMLLIElement>) => {
    if (!cardList || !cardKey || !cardList[cardKey]) {
      return;
    }

    initCard(cardList[cardKey]);
    navigation(PATHNAME.NICKNAME);
  };

  if (!cardList) {
    return null;
  }

  return (
    <styled.CardBoxList>
      {Object.values(cardList).map(card => {
        const key = generateCardKey(card);

        return (
          <styled.CardBoxItem
            key={key + 'box'}
            data-card-key={key}
            onClick={onClickCardBoxItem}
          >
            <CardBox
              key={key + 'card'}
              card={card}
              backgroundColor={card.company.backgroundColor}
            />
            {card.nickname ? (
              <styled.NicknameParagraph key={key + 'nickname'}>
                {card.nickname}
              </styled.NicknameParagraph>
            ) : null}
          </styled.CardBoxItem>
        );
      })}
    </styled.CardBoxList>
  );
};

export default CardBoxList;
