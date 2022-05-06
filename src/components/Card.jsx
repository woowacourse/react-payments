import { memo } from 'react';
import styled, { css } from 'styled-components';

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
          size: '17px',
          height: '22px',
        },
      };
    case 'large':
      return;
  }
};

const Styled = {
  Card: styled.div`
    box-shadow: 3px 3px 5px #00000040;
    border-radius: 5px;
    cursor: pointer;
    padding: 19px;

    ${({ bgColor, cardStyle }) => css`
      background: ${bgColor};
      height: ${cardStyle.card.height};
      width: ${cardStyle.card.width};
    `};
  `,

  Title: styled.div`
    color: #383838;

    ${({ cardStyle }) => css`
      font-size: ${cardStyle.title.size};
      height: ${cardStyle.title.size};
      margin-bottom: ${cardStyle.title.marginBottom};
    `}
  `,

  Magnet: styled.div`
    background: #cbba64;
    border-radius: 4px;

    ${({ cardStyle }) => css`
      height: ${cardStyle.magnet.height};
      margin-bottom: ${cardStyle.magnet.marginBottom};
      width: ${cardStyle.magnet.width};
    `}
  `,

  NumberSet: styled.div`
    color: #525252;
    font-weight: bold;
    text-align: center;

    ${({ cardStyle }) => css`
      font-size: ${cardStyle.detail.size};
      height: ${cardStyle.detail.height};
      margin-bottom: ${cardStyle.numberSet.marginBottom};
    `}
  `,

  OwnerName: styled.span`
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

    ${({ cardStyle }) => css`
      font-size: ${cardStyle.detail.size};
      height: ${cardStyle.detail.height};
    `}
  `,

  ValidDate: styled.span`
    color: #525252;
    float: right;
    font-weight: bold;

    ${({ cardStyle }) => css`
      font-size: ${cardStyle.detail.size};
      height: ${cardStyle.detail.height};
    `}
  `,
};

function Card({
  bgColor,
  className,
  name,
  number,
  onClickFunc,
  size,
  title,
  validDate,
}) {
  const cardStyle = getCardSize(size);

  return (
    <Styled.Card
      className={className}
      bgColor={bgColor}
      cardStyle={cardStyle}
      onClick={onClickFunc}
    >
      <Styled.Title cardStyle={cardStyle}>{title}</Styled.Title>
      <Styled.Magnet cardStyle={cardStyle} />
      <div>
        <Styled.NumberSet cardStyle={cardStyle}>
          {number || ''}
        </Styled.NumberSet>
        <Styled.ValidDate cardStyle={cardStyle}>
          {validDate || 'MM/YY'}
        </Styled.ValidDate>
        <Styled.OwnerName cardStyle={cardStyle}>
          {name || 'NAME'}
        </Styled.OwnerName>
      </div>
    </Styled.Card>
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
