import React from 'react';

function CardOwner({ cardNumbers, setCardNumbers }) {
  const handleOnInput = (event) => {
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    event.target.value = event.target.value.replace(/[^A-Za-z.]/g, '').replace(regExp, '');

    let { value, name } = event.target;

    if (value.length > 30) {
      value = value.slice(0, 30);
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
        onInput={handleOnInput}
        value={cardNumbers.owner}
        required
      />
    </div>
  );
}

export default CardOwner;
