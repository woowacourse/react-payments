import PropTypes from 'prop-types';
import React from 'react';

const UnderLineInput = (props) => {
  const { name, onChange } = props;

  return (
    <input
      type="text"
      placeholder="카드 이름을 입력해주세요."
      maxLength={10}
      className="border-b border-black-500 w-3/4 text-center outline-none	"
      name={name}
      onChange={onChange}
    />
  );
};

export default UnderLineInput;

UnderLineInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};
