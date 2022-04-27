import React from 'react';
import Tooltip from './Tooltip';

function CVC({ cardNumbers, setCardNumbers }) {
  const handleOnInput = (event) => {
    event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');

    let { value, name } = event.target;

    if (value.length > 3) {
      value = value.slice(0, 3);
    }

    setCardNumbers({
      ...cardNumbers,
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
        value={cardNumbers.cvc}
      />
      <Tooltip />
    </div>
  );
}

export default CVC;
