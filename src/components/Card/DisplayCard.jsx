import { memo } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import Card from './Basic';

const CardName = styled.div`
  color: #575757;
  font-weight: bold;
  font-size: 16px;
  height: 16px;
  margin-top: 15px;
`;

function DisplayCard({
  bgColor,
  cardName,
  className,
  company,
  number,
  ownerName,
  validDate,
}) {
  return (
    <div className={className}>
      <Card
        bgColor={bgColor}
        company={company}
        size="medium"
        name={ownerName}
        number={number}
        validDate={validDate}
      />
      <CardName>{cardName}</CardName>
    </div>
  );
}

DisplayCard.propTypes = {
  bgColor: PropTypes.string,
  cardName: PropTypes.string,
  className: PropTypes.string,
  company: PropTypes.string,
  number: PropTypes.string,
  ownerName: PropTypes.string,
  validDate: PropTypes.string,
};

export default memo(DisplayCard);
