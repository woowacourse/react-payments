import React from 'react';
import PropTypes from 'prop-types';

const CardNameInput = () => {
  return <input type="text" placeholder="카드 이름을 입력해주세요." className="border-b-2 w-2/3 text-center" />;
};

export default CardNameInput;

CardNameInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
