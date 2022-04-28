import React from 'react';
import PropTypes from 'prop-types';

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
    <div className="input-container input-inline">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        name="cvc"
        className="input-basic w-25"
        type="password"
        onInput={handleOnInput}
        value={cardInfo.cvc}
        required
      />
    </div>
  );
}

export default CVC;

CVC.propTypes = {
  cardInfo: PropTypes.object.isRequired,
  setCardInfo: PropTypes.func.isRequired,
};
