import React from 'react';
import styled from 'styled-components';
import { censorString } from '../../utils/commons';

const CardPreview = ({
  brand,
  firstCardNumber,
  secondCardNumber,
  thirdCardNumber,
  fourthCardNumber,
  owner,
  expiredMonth,
  expiredYear,
}) => (
  <StyledCardPreview className="card-box">
    <div className="small-card">
      <div className="card-top">
        <span className="card-text">{brand ?? null}</span>
      </div>
      <div className="card-middle">
        <div className="small-card__chip" />
      </div>
      <div className="card-bottom">
        <div className="card-bottom__number">
          <span className="card-text">{`${firstCardNumber} ${secondCardNumber} ${censorString(
            thirdCardNumber
          )} ${censorString(fourthCardNumber)}`}</span>
        </div>
        <div className="card-bottom__info">
          <p className="card-text w-50 ellipsis">{owner.toUpperCase()}</p>
          {(expiredMonth || expiredYear) && (
            <span className="card-text">
              {expiredMonth} {expiredMonth && expiredYear ? '/' : null}{' '}
              {expiredYear}
            </span>
          )}
        </div>
      </div>
    </div>
  </StyledCardPreview>
);

const StyledCardPreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  color: #525252;

  .small-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 10px;

    width: 198px;
    height: 130px;

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
    display: block;
    margin: 0;

    /* vertical-align: middle; */
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.1em;
  }
`;

export default CardPreview;
