import * as Styled from './style.js';
import { CardItem } from './CardItem';
import { CardButton } from '../../../Button/CardButton';
import { useContext } from 'react';
import { PaymentContext } from '../../../../contexts/PaymentContextProvider';

/**
 * Primary UI component for user interaction
 */

export const CardList = () => {
  const { cards, setCurrentPage } = useContext(PaymentContext);

  return (
    <Styled.Container>
      <Styled.CardListContainer>
        {cards.map((card, idx) => (
          <CardItem key={idx} card={card} />
        ))}
      </Styled.CardListContainer>
      <Styled.CardAddButtonContainer>
        <CardButton
          onClick={() => {
            setCurrentPage('cardRegister');
          }}
        />
      </Styled.CardAddButtonContainer>
    </Styled.Container>
  );
};
