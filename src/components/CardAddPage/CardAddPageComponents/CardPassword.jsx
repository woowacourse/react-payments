import React, { useRef } from 'react';

function CardPassword({ cardNumbers, setCardNumbers }) {
  const handleOnInput = (event) => {
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(regExp, '');

    let { value, name } = event.target;

    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    setCardNumbers({
      ...cardNumbers,
      [name]: value,
    });
  };

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input
        name="password1"
        className="input-basic w-15 input-password"
        type="password"
        onInput={handleOnInput}
        value={cardNumbers.password1}
      />
      <input
        name="password2"
        className="input-basic w-15 input-password"
        type="password"
        onInput={handleOnInput}
        value={cardNumbers.password2}
      />
      <input
        className="input-basic w-15 input-password-hidden"
        type="password"
        value={'⋅'}
        disabled
      />
      <input
        className="input-basic w-15 input-password-hidden"
        type="password"
        value={'⋅'}
        disabled
      />
    </div>
  );
}

export default CardPassword;
