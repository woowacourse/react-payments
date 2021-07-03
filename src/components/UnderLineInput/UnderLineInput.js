import React from 'react';
import PropTypes from 'prop-types';

const UnderLineInput = (props) => {
  const { name } = props;

  return (
    <input
      type="text"
      placeholder="카드 이름을 입력해주세요."
      maxLength={10}
      className="border-b border-black-500 w-3/4 text-center outline-none	"
      name={name}
    />
  );
};

export default UnderLineInput;

UnderLineInput.propTypes = {
  name: PropTypes.string,
};
