import React from 'react';
import styled from 'styled-components';
import { censorString } from '../../utils/commons';

const CardPreview = ({
  size,
  brand,
  firstCardNumber,
  secondCardNumber,
  thirdCardNumber,
  fourthCardNumber,
  owner,
  expiredMonth,
  expiredYear,
}) => {
  const isSmall = size === 'small' || !size;
  const cardSizeClass = isSmall ? 'small-card' : 'big-card';
  const cardChipClass = isSmall ? 'small-card__chip' : 'big-card__chip';
  const cardTextClass = isSmall ? 'card-text' : 'card-text__big';

  return (
    <StyledCardPreview>
      <div className={cardSizeClass}>
        <div className="card-top">
          <span className={cardTextClass}>{brand ?? null}</span>
        </div>
        <div className="card-middle">
          <div className={cardChipClass} />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span
              className={cardTextClass}
            >{`${firstCardNumber} ${secondCardNumber} ${censorString(
              thirdCardNumber
            )} ${censorString(fourthCardNumber)}`}</span>
          </div>
          <div className="card-bottom__info">
            <p className={`${cardTextClass} w-50 ellipsis`}>
              {owner.toUpperCase()}
            </p>
            {(expiredMonth || expiredYear) && (
              <span className={cardTextClass}>
                {expiredMonth} {expiredMonth && expiredYear ? '/' : null}{' '}
                {expiredYear}
              </span>
            )}
          </div>
        </div>
      </div>
    </StyledCardPreview>
  );
};

const StyledCardPreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px 0;

  .empty-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 208px;
    height: 130px;

    font-size: 30px;
    color: #575757;

    background: #e5e5e5;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    user-select: none;
  }

  .small-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 208px;
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

  .big-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 290px;
    height: 180px;

    background: #94dacd;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }

  .big-card__chip {
    width: 55.04px;
    height: 35.77px;

    background: #cbba64;
    border-radius: 4px;

    font-size: 24px;
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
  }

  .card-text {
    margin: 0 16px;

    font-size: 14px;
    line-height: 16px;
    vertical-align: middle;
    font-weight: 400;
  }

  .card-text__big {
    margin: 0 16px;

    font-size: 18px;
    line-height: 20px;
    vertical-align: middle;
    font-weight: 400;
  }
`;

export default CardPreview;
