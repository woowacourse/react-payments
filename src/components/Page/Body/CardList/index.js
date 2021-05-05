// import PropTypes from 'prop-types';
import * as Styled from './style.js';
import PropTypes from 'prop-types';
import { CardItem } from './CardItem';
import { ClickableCard } from '../../../Button/ClickableCard';
import { PageBody } from '../../../../utils/style/Page.js';

/**
 * Primary UI component for user interaction
 */

export const CardList = ({ cards, setCurrentPage }) => {
  return (
    <PageBody>
      <Styled.Container>
        <Styled.CardListContainer>
          {cards.map((card, idx) => (
            <li key={idx}>
              <CardItem key={idx} card={card} />
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

CardList.propTypes = {
  cards: PropTypes.array,
  setCurrentPage: PropTypes.func,
};

CardList.defaultProps = {};
