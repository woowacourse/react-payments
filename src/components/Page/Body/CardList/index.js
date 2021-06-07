import { useContext } from 'react';

import { ClickableCard } from '../../../Button/ClickableCard';

import { CardContext } from '../../../../contexts/CardContextProvider.js';
import { PageContext } from '../../../../contexts/PageContextProvider.js';

import { PageBody } from '../../../../utils/style/Page.js';
import * as Styled from './style.js';
import { Card } from '../../../Card';

export const CardList = () => {
  const { cards, setCurrentCard } = useContext(CardContext);
  const { setCurrentPage } = useContext(PageContext);

  return (
    <PageBody>
      <Styled.Container>
        <Styled.CardListContainer>
          {cards.map((card, idx) => (
            <li key={idx}>
              <Styled.CardItemContainer>
                <Card
                  size={'small'}
                  company={card.company}
                  numbers={card.numbers}
                  owner={card.owner}
                  validDay={card.validDay}
                  onClick={() => {
                    setCurrentCard(card);
                    setCurrentPage('cardRegistered');
                  }}
                />
                <Styled.CardNickName>{card.nickName}</Styled.CardNickName>
              </Styled.CardItemContainer>
            </li>
          ))}
          <li>
            <Styled.CardAddButtonContainer>
              <ClickableCard
                onClick={() => {
                  setCurrentPage('cardRegister');
                }}
              />
            </Styled.CardAddButtonContainer>
          </li>
        </Styled.CardListContainer>
      </Styled.Container>
    </PageBody>
  );
};
