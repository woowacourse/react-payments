import { useContext } from 'react';
import { CardInfoContext } from 'contexts/CardInfoContextProvider';

function Card({ isEmpty, cardInfo, handleCardAdd }) {
  const { state } = useContext(CardInfoContext);

  const { number1, number2, number3, number4, owner, month, year } = state.inputs;

  return (
    <div className="card-box">
      <div
        className={isEmpty ? 'card-container card-empty' : 'card-container card-not-empty'}
        onClick={isEmpty ? handleCardAdd : undefined}
      >
        {isEmpty ? (
          '+'
        ) : (
          <>
            <div className="card-top" />
            <div className="card-middle">
              <div className="small-card__chip" />
            </div>

            <div className="card-bottom">
              <div className="card-text card-number-flex">
                <div className="card-number-letter-spacing">{number1 || cardInfo?.number1}</div>
                <div className="card-number-letter-spacing">{number2 || cardInfo?.number2}</div>
                <div className="hidden-card-number-letter-spacing">
                  {'ㆍ'.repeat(number3?.length) || 'ㆍ'.repeat(cardInfo?.number3?.length)}
                </div>
                <div className="hidden-card-number-letter-spacing">
                  {'ㆍ'.repeat(number4?.length) || 'ㆍ'.repeat(cardInfo?.number4?.length)}
                </div>
              </div>
              <div className="card-bottom-position">
                <div className="card-bottom__info">
                  <span className="card-text">
                    {owner?.slice(0, 10) || cardInfo?.owner || 'NAME'}
                  </span>
                  <span className="card-text">
                    {month || cardInfo?.month || 'MM'} / {year || cardInfo?.year || 'YY'}
                  </span>
                </div>
              </div>
            </div>
            <div className="card-name">{cardInfo?.name}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
