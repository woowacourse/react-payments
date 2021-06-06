import * as Styled from './style.js';
import PropTypes from 'prop-types';
import { Card } from '../../../../Card';

export const CardItem = ({ card, ...props }) => {
  const { company, numbers, owner, validDay, nickName } = card;
  return (
    <>
      <Styled.Container>
        <Card
          size={'small'}
          company={company}
          numbers={numbers}
          owner={owner}
          validDay={validDay}
          {...props}
        />
        <Styled.CardNickName>{nickName}</Styled.CardNickName>
      </Styled.Container>
    </>
  );
};

CardItem.propTypes = {
  card: PropTypes.object,
};
