import { memo } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';

function Input({
  description,
  margin,
  placeholder,
  textAlign,
  type,
  value,
  width,
  ...props
}) {
  return (
    <>
      {description && <Styled.Label>{description}</Styled.Label>}
      <Styled.Input
        margin={margin}
        placeholder={placeholder}
        textAlign={textAlign}
        type={type}
        value={value}
        width={width}
        {...props}
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
  placeholder: PropTypes.string,
  textAlign: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.string,
  onChangeFunc: PropTypes.func,
};

const Styled = {
  Input: styled.input`
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
  `,

  Label: styled.label`
    display: block;
    font-size: 12px;
    color: #525252;
    margin-bottom: 3px;
  `,
};

export default memo(Input);
