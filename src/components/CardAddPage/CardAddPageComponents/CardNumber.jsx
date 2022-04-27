import React from 'react';

function CardNumber({ cardNumbers, setCardNumbers }) {
  const handleOnChange = (event) => {
    let { value, name } = event.target;

    if (value.length > 4) {
      value = value.slice(0, 4);
    }

    setCardNumbers({
      ...cardNumbers,
      [name]: value,
    });

    console.log(cardNumbers);
  };

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          name="number1"
          className="input-basic"
          type="number"
          onChange={handleOnChange}
          value={cardNumbers.number1}
        />
        <input
          name="number2"
          className="input-basic"
          type="number"
          onChange={handleOnChange}
          value={cardNumbers.number2}
        />
        <input
          name="number3"
          className="input-basic input-security"
          type="number"
          onChange={handleOnChange}
          value={cardNumbers.number3}
        />
        <input
          name="number4"
          className="input-basic input-security"
          type="number"
          onChange={handleOnChange}
          value={cardNumbers.number4}
        />
      </div>
    </div>
  );
}

export default CardNumber;
