import React from 'react';

function CardNumber({ cardNumbers, setCardNumbers }) {
  const handleOnInput = (event) => {
    event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

    let { value, name } = event.target;

    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    setCardNumbers({
      ...cardNumbers,
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
          value={cardNumbers.number1}
          required
        />
        <input
          name="number2"
          className="input-basic"
          type="text"
          onInput={handleOnInput}
          value={cardNumbers.number2}
          required
        />
        <input
          name="number3"
          className="input-basic"
          type="password"
          onInput={handleOnInput}
          value={cardNumbers.number3}
          required
        />
        <input
          name="number4"
          className="input-basic"
          type="password"
          onInput={handleOnInput}
          value={cardNumbers.number4}
          required
        />
      </div>
    </div>
  );
}

export default CardNumber;
