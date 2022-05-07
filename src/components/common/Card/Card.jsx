import { useContext } from 'react';
import { CardInfoContext } from 'App';

import { PAGE } from 'constants';

function Card({ isEmpty }) {
  const { state, setPage } = useContext(CardInfoContext);

  const { number1, number2, number3, number4, owner, month, year } = state;
  const handleCardAdd = () => {
    setPage(PAGE.ADD);
  };

  return (
    <div className="card-box">
      <div
        className={isEmpty ? 'card-container card-empty' : 'card-container card-not-empty'}
        onClick={handleCardAdd}
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
                <div className="card-number-letter-spacing">{number1}</div>
                <div className="card-number-letter-spacing">{number2}</div>
                <div className="hidden-card-number-letter-spacing">
                  {'ㆍ'.repeat(number3.length)}
                </div>
                <div className="hidden-card-number-letter-spacing">
                  {'ㆍ'.repeat(number4.length)}
                </div>
              </div>
              <div className="card-bottom-position">
                <div className="card-bottom__info">
                  <span className="card-text">{owner === '' ? 'NAME' : owner.slice(0, 10)}</span>
                  <span className="card-text">
                    {month || 'MM'} / {year || 'YY'}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
