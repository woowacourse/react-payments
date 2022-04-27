import React from 'react';

function CardOwner({ cardNumbers, setCardNumbers }) {
  const handleOnChange = (event) => {
    const { value, name } = event.target;

    if (value.length > 30) {
      value.slice(0, 30);
    }

    setCardNumbers({
      ...cardNumbers,
      [name]: value,
    });
  };

  return (
    <div className="input-container">
      <div className="input-wrapper">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <span className="input-length">
          {cardNumbers.owner.length <= 30 ? cardNumbers.owner.length : 30}/30
        </span>
      </div>
      <input
        name="owner"
        type="text"
        className="input-basic"
        minLength="1"
        maxLength="30"
        onChange={handleOnChange}
        value={cardNumbers.owner}
      />
    </div>
  );
}

export default CardOwner;
