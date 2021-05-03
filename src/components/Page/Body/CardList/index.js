// import PropTypes from 'prop-types';
import * as Styled from './style.js';
import PropTypes from 'prop-types';
import { CardItem } from './CardItem';
import { ClickableCard } from '../../../Button/ClickableCard';

/**
 * Primary UI component for user interaction
 */

export const CardList = ({ cards, setCurrentPage }) => {
  return (
    <Styled.Container>
      <Styled.CardListContainer>
        {cards.map((card, idx) => (
          <CardItem key={idx} card={card} />
        ))}
      </Styled.CardListContainer>
      <Styled.CardAddButtonContainer>
        <ClickableCard
          onClick={() => {
            setCurrentPage('cardRegister');
          }}
        />
      </Styled.CardAddButtonContainer>
    </Styled.Container>
  );
};

CardList.propTypes = {
  cards: PropTypes.array,
};

CardList.defaultProps = {};
