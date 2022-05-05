import { memo } from 'react';
import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';

const StyledInput = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid black;
  font-size: 18px;

  :focus {
    outline: none;
  }

  ${({ margin, padding, textAlign, width }) => css`
    margin: ${margin?.t || '0'} ${margin?.r || '0'} ${margin?.b || '0'}
      ${margin?.l || '0'};
    padding: ${padding?.t || '0'} ${padding?.r || '0'} ${padding?.b || '0'}
      ${padding?.l || '0'};
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

function UnderlinedInput({
  description,
  margin,
  padding,
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
        padding={padding}
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

UnderlinedInput.defaultProps = {
  textAlign: 'center',
  type: 'text',
  width: '343px',
};

UnderlinedInput.propTypes = {
  description: PropTypes.string,
  margin: PropTypes.shape({
    t: PropTypes.string,
    r: PropTypes.string,
    b: PropTypes.string,
    l: PropTypes.string,
  }),
  padding: PropTypes.shape({
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

export default memo(UnderlinedInput);
