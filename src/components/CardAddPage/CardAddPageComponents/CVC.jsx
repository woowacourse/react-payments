import React from 'react';
import Tooltip from './Tooltip';

function CVC({ cardInfo, setCardInfo }) {
  const handleOnInput = (event) => {
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;
    event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(regExp, '');

    let { value, name } = event.target;

    if (value.length > 3) {
      value = value.slice(0, 3);
    }

    setCardInfo({
      ...cardInfo,
      [name]: value,
    });
  };

  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        name="cvc"
        className="input-basic w-25"
        type="password"
        onInput={handleOnInput}
        value={cardInfo.cvc}
        required
      />
      <Tooltip />
    </div>
  );
}

export default CVC;
