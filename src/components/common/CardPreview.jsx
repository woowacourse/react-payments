import React from 'react';
import styled, { css } from 'styled-components';

import useCardPreview from '../../hooks/useCardPreview';

const StyledCardPreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  color: #525252;

  width: 206px;
  height: 130px;

  font-weight: 500;
  line-height: 10px;

  ${(props) =>
    props.size === 'large' &&
    css`
      width: 293px;
      height: 183px;
      margin: 0px 17px 33px;

      font-weight: 400;
    `}

  .small-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${(props) => (props.size === 'large' ? '0 16px' : '0 10px')};
    width: 100%;
    height: 100%;

    margin: 0 0 5px;
    background: #94dacd;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }

  .small-card__chip {
    width: 40px;
    height: 26px;
    left: 95px;
    top: 122px;

    background: #cbba64;
    border-radius: 4px;
  }

  .card-top {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
  }

  .card-middle {
    width: 100%;
    height: 100%;
    margin-left: 30px;

    display: flex;
    align-items: center;
  }

  .card-bottom {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card-bottom__number {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-bottom__info {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .card-text {
    margin: 0;
    line-height: 14px;
    font-size: ${(props) => (props.size === 'large' ? '16px' : '12px')};
    letter-spacing: ${(props) => (props.size === 'large' ? '0.2em' : '0.1em')};
  }
`;

const CardPreview = ({ values, size = 'small' }) => {
  const { getCardInfo } = useCardPreview();
  const { brand, cardNumber, expiredDate, owner } = getCardInfo(values);
  const cardNumberText = `${cardNumber[0]} ${cardNumber[1]} ${'•'.repeat(
    cardNumber[2].length
  )} ${'•'.repeat(cardNumber[3].length)}`;

  return (
    <StyledCardPreview className="card-box" size={size}>
      <div className="small-card">
        <div className="card-top">
          <span className="card-text">{brand ?? null}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumberText}</span>
          </div>
          <div className="card-bottom__info">
            <p className="card-text w-50 ellipsis">{owner}</p>
            <span className="card-text">
              {expiredDate.month} {expiredDate.month.length === 2 ? '/' : null}{' '}
              {expiredDate.year}
            </span>
          </div>
        </div>
      </div>
    </StyledCardPreview>
  );
};

export default CardPreview;
