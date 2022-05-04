import { memo } from 'react';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';

const StyledInput = styled.input`
  background: #ecebf1;
  border: none;
  border-radius: 7px;
  color: #04c09e;
  font-size: 18px;
  height: 45px;

  ::placeholder {
    color: #737373;
  }

  ${({ margin, textAlign, width }) => css`
    margin: ${margin?.t || '0'} ${margin?.r || '0'} ${margin?.b || '0'}
      ${margin?.l || '0'};
    text-align: ${textAlign};
    width: ${width};
  `}
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 12px;
  color: #525252;
  margin-bottom: 3px;
`;

function Input({
  description,
  margin,
  textAlign,
  width,
  type,
  value,
  maxLength,
  placeholder,
  onChangeFunc,
}) {
  return (
    <>
      {description && <StyledLabel>{description}</StyledLabel>}
      <StyledInput
        margin={margin}
        textAlign={textAlign}
        width={width}
        type={type}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={onChangeFunc}
      />
    </>
  );
}

Input.defaultProps = {
  textAlign: 'center',
  type: 'text',
  width: '343px',
};

Input.propTypes = {
  description: PropTypes.string,
  margin: PropTypes.shape({
    t: PropTypes.string,
    r: PropTypes.string,
    b: PropTypes.string,
    l: PropTypes.string,
  }),
  textAlign: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  onChangeFunc: PropTypes.func,
};

export default memo(Input);
