import React from 'react';

function CardExpirationDate({ cardNumbers, setCardNumbers }) {
  const handleMonthOnInput = (event) => {
    if (event.target.value >= 2 && event.target.value <= 9) {
      event.target.value = '0' + event.target.value;
    }
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(regExp, '');

    let { value, name } = event.target;

    if (value.length > 2) {
      value = value.slice(0, 2);
    }

    setCardNumbers({
      ...cardNumbers,
      [name]: value,
    });
  };

  const handleYearOnInput = (event) => {
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(regExp, '');

    let { value, name } = event.target;

    if (value.length > 2) {
      value = value.slice(0, 2);
    }

    setCardNumbers({
      ...cardNumbers,
      [name]: value,
    });
  };

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          name="month"
          className="input-basic"
          type="text"
          placeholder="MM"
          onInput={handleMonthOnInput}
          value={cardNumbers.month}
        />
        <input
          name="year"
          className="input-basic"
          type="text"
          placeholder="YY"
          onInput={handleYearOnInput}
          value={cardNumbers.year}
        />
      </div>
    </div>
  );
}

export default CardExpirationDate;
