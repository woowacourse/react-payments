import { useContext } from 'react';

import { CardItem } from './CardItem';
import { ClickableCard } from '../../../Button/ClickableCard';

import { CardContext } from '../../../../contexts/CardContextProvider.js';
import { PageContext } from '../../../../contexts/PageContextProvider.js';

import { PageBody } from '../../../../utils/style/Page.js';
import * as Styled from './style.js';

export const CardList = () => {
  const { cards, setCurrentCard } = useContext(CardContext);
  const { setCurrentPage } = useContext(PageContext);

  return (
    <PageBody>
      <Styled.Container>
        <Styled.CardListContainer>
          {cards.map((card, idx) => (
            <li key={idx}>
              <CardItem
                key={idx}
                card={card}
                onClick={() => {
                  setCurrentCard(card);
                  setCurrentPage('cardRegistered');
                }}
              />
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
