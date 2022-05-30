import { censorString } from '../../utils/commons';
import * as S from './CardPreview.styled';

const CardPreview = (
  {
    size,
    brand,
    firstCardNumber,
    secondCardNumber,
    thirdCardNumber,
    fourthCardNumber,
    owner,
    expiredMonth,
    expiredYear,
  } = {
    size: 'small',
    brand: '',
    firstCardNumber: '',
    secondCardNumber: '',
    thirdCardNumber: '',
    fourthCardNumber: '',
    owner: '',
    expiredMonth: '',
    expiredYear: '',
  }
) => {
  const isSmall = size === 'small' || !size;
  const cardSizeClass = isSmall ? 'small-card' : 'big-card';
  const cardChipClass = isSmall ? 'small-card__chip' : 'big-card__chip';
  const cardTextClass = isSmall ? 'card-text' : 'card-text__big';

  return (
    <S.CardPreviewBox>
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
    </S.CardPreviewBox>
  );
};

export default CardPreview;
