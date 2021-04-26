import React from 'react';
import PropTypes from 'prop-types';

const CardNameInput = () => {
  return (
    <input
      type="text"
      placeholder="카드 이름을 입력해주세요."
      className="border-b border-black-500 w-3/4 text-center outline-none	"
    />
  );
};

export default CardNameInput;

CardNameInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
