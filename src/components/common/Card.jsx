import { memo } from 'react';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';

const getCardSize = size => {
  switch (size) {
    case 'medium':
      return {
        card: {
          height: '133px',
          padding: '19px',
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
          size: '17px',
          height: '22px',
        },
      };
    case 'large':
      return {
        card: {
          height: '183px',
          padding: '26px',
          width: '293px',
        },
        title: {
          marginBottom: '40px',
          size: '14px',
        },
        magnet: {
          height: '36px',
          marginBottom: '22px',
          width: '55px',
        },
        numberSet: {
          marginBottom: '20px',
        },
        detail: {
          size: '22px',
          height: '27px',
        },
      };
  }
};

const StyledCard = styled.div`
  box-shadow: 3px 3px 5px #00000040;
  border-radius: 5px;

  ${({ bgColor, cardStyle: { height, padding, width } }) => css`
    background: ${bgColor};
    height: ${height};
    padding: ${padding};
    width: ${width};
  `};
`;
const Title = styled.div`
  color: #383838;

  ${({ cardStyle: { marginBottom, size } }) => css`
    font-size: ${size};
    height: ${size};
    margin-bottom: ${marginBottom};
  `}
`;
const Magnet = styled.div`
  background: #cbba64;
  border-radius: 4px;

  ${({ cardStyle: { height, marginBottom, width } }) => css`
    height: ${height};
    margin-bottom: ${marginBottom};
    width: ${width};
  `}
`;
const NumberSet = styled.div`
  color: #525252;
  font-weight: bold;
  text-align: center;

  ${({
    cardStyle: {
      numberSet: { marginBottom },
      detail: { size, height },
    },
  }) => css`
    font-size: ${size};
    height: ${height};
    margin-bottom: ${marginBottom};
  `}
`;
const OwnerName = styled.span`
  color: #525252;
  display: inline-block;
  font-weight: bold;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 130px;
  word-break: break-all;

  ::-webkit-scrollbar {
    display: none;
  }

  ${({ cardStyle: { size, height } }) => css`
    font-size: ${size};
    height: ${height};
  `}
`;
const ValidDate = styled.span`
  color: #525252;
  float: right;
  font-weight: bold;

  ${({ cardStyle: { size, height } }) => css`
    font-size: ${size};
    height: ${height};
  `}
`;

function Card({ bgColor, className, name, number, size, title, validDate }) {
  const {
    card,
    title: titleStyle,
    magnet,
    numberSet,
    detail,
  } = getCardSize(size);

  return (
    <StyledCard className={className} bgColor={bgColor} cardStyle={card}>
      <Title cardStyle={titleStyle}>{title}</Title>
      <Magnet cardStyle={magnet} />
      <div>
        <NumberSet cardStyle={{ numberSet, detail }}>{number || ''}</NumberSet>
        <OwnerName cardStyle={detail}>{name || 'NAME'}</OwnerName>
        <ValidDate cardStyle={detail}>{validDate || 'MM/YY'}</ValidDate>
      </div>
    </StyledCard>
  );
}

Card.defaultProps = {
  size: 'medium',
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
