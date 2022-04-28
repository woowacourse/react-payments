import React from 'react';
import PropTypes from 'prop-types';

function CardNumber({ cardInfo, setCardInfo }) {
  const handleOnInput = (event) => {
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;

    event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(regExp, '');

    let { value, name } = event.target;

    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  // form submit에서 minLength에 대한 validation 필요

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          name="number1"
          className="input-basic"
          type="text"
          onInput={handleOnInput}
          value={cardInfo.number1}
          required
        />
        <input
          name="number2"
          className="input-basic"
          type="text"
          onInput={handleOnInput}
          value={cardInfo.number2}
          required
        />
        <input
          name="number3"
          className="input-basic"
          type="password"
          onInput={handleOnInput}
          value={cardInfo.number3}
          required
        />
        <input
          name="number4"
          className="input-basic"
          type="password"
          onInput={handleOnInput}
          value={cardInfo.number4}
          required
        />
      </div>
    </div>
  );
}

export default CardNumber;

CardNumber.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  setCardInfo: PropTypes.func.isRequired,
};
