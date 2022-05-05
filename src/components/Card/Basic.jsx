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
          size: '13px',
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
          height: '163px',
          padding: '26px',
          width: '273px',
        },
        title: {
          marginBottom: '35px',
          size: '17px',
        },
        magnet: {
          height: '36px',
          marginBottom: '20px',
          width: '55px',
        },
        numberSet: {
          marginBottom: '12px',
        },
        detail: {
          size: '21px',
          height: '26px',
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

function Card({
  bgColor,
  className,
  company,
  name,
  number,
  size,
  validDate,
  onClickFunc,
}) {
  const { card, title, magnet, numberSet, detail } = getCardSize(size);

  return (
    <StyledCard
      className={className}
      bgColor={bgColor}
      cardStyle={card}
      onClick={onClickFunc}
    >
      <Title cardStyle={title}>{company}</Title>
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
  company: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  size: PropTypes.string,
  validDate: PropTypes.string,
  onClickFunc: PropTypes.func,
};

export default memo(Card);
