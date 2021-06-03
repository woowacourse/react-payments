// import PropTypes from 'prop-types';
import * as Styled from './style.js';
import PropTypes from 'prop-types';
import { Card } from '../../../../Card';

/**
 * Primary UI component for user interaction
 */

export const CardItem = ({ card, ...props }) => {
  const { company, numbers, owner, validDay, nickName } = card;
  return (
    <>
      <Styled.Container {...props}>
        <Card
          size={'small'}
          company={company}
          numbers={numbers}
          owner={owner}
          validDay={validDay}
        />
        <Styled.CardNickName>{nickName}</Styled.CardNickName>
      </Styled.Container>
    </>
  );
};

CardItem.propTypes = {
  card: PropTypes.object,
};

// CardItem.defaultProps = {};
