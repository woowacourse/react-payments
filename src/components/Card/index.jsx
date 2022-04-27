import { memo } from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const getCardSize = size => {
  switch (size) {
    case 'medium':
      return {
        card: {
          height: '133px',
          width: '213px',
        },
        title: {
          marginBottom: '33px',
          size: '10px',
        },
        magnet: {
          height: '26px',
          marginBottom: '15px',
          width: '40px',
        },
        numberSet: {
          marginBottom: '12px',
        },
        detail: {
          size: '20px',
        },
      };
    case 'large':
      return;
  }
};

const StyledCard = styled.div`
  background: ${props => props.bgColor};
  box-shadow: 3px 3px 5px #00000040;
  border-radius: 5px;
  height: ${props => props.cardStyle.card.height};
  width: ${props => props.cardStyle.card.width};
  padding: 19px;
`;
const Title = styled.div`
  color: #383838;
  font-size: ${props => props.cardStyle.title.size};
  height: ${props => props.cardStyle.title.size};
  margin-bottom: ${props => props.cardStyle.title.marginBottom};
`;
const Magnet = styled.div`
  background: #cbba64;
  border-radius: 4px;
  height: ${props => props.cardStyle.magnet.height};
  margin-bottom: ${props => props.cardStyle.magnet.marginBottom};
  width: ${props => props.cardStyle.magnet.width};
`;
const NumberSet = styled.div`
  color: #525252;
  font-weight: bold;
  font-size: ${props => props.cardStyle.detail.size};
  height: ${props => props.cardStyle.detail.size};
  margin-bottom: ${props => props.cardStyle.numberSet.marginBottom};
  text-align: center;
`;
const OwnerName = styled.span`
  color: #525252;
  font-weight: bold;
  font-size: ${props => props.cardStyle.detail.size};
  height: ${props => props.cardStyle.detail.size};
`;
const ValidDate = styled.span`
  color: #525252;
  float: right;
  font-weight: bold;
  font-size: ${props => props.cardStyle.detail.size};
  height: ${props => props.cardStyle.detail.size};
`;

function Card({ bgColor, className, name, number, size, title, validDate }) {
  const cardStyle = getCardSize(size);

  return (
    <StyledCard className={className} bgColor={bgColor} cardStyle={cardStyle}>
      <Title cardStyle={cardStyle}>{title}</Title>
      <Magnet cardStyle={cardStyle} />
      <div>
        <NumberSet cardStyle={cardStyle}>{number}</NumberSet>
        <OwnerName cardStyle={cardStyle}>{name}</OwnerName>
        <ValidDate cardStyle={cardStyle}>{validDate}</ValidDate>
      </div>
    </StyledCard>
  );
}

Card.defaultProps = {
  name: 'NAME',
  size: 'medium',
  validDate: 'MM/YY',
};

Card.propTypes = {
  bgColor: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  validDate: PropTypes.string,
};

export default memo(Card);
