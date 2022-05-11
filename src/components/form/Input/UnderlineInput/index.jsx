import React from 'react';
import PropTypes from 'prop-types';

function UnderlineInput({ value, onChange }) {
  return (
    <input
      className="input-underline w-75"
      type="text"
      placeholder="카드의 별칭을 입력해주세요."
      value={value}
      onChange={onChange}
    />
  );
}

UnderlineInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default UnderlineInput;
