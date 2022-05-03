import React from 'react';
import styled from 'styled-components';

const StyledInputFieldContainer = styled.div`
  margin: 16px 0;

  .input-title {
    display: inline-block;
    font-size: 12px;
    line-height: 14px;
    vertical-align: top;
    margin-bottom: 4px;
    color: #525252;
  }

  .input-box {
    display: flex;
    height: 47px;
    align-items: center;
    margin-top: 0.375rem;
    color: #d3d3d3;
    border-radius: 0.25rem;
    background-color: #ecebf1;
  }

  .transparent {
    background-color: transparent;
  }

  .input-basic {
    background-color: #ecebf1;
    height: 45px;
    width: 100%;
    text-align: center;
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: #9ca3af;
    border: none;
    border-radius: 0.25rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #525252;
  }

  .input-basic::placeholder {
    letter-spacing: -0.02em;
  }

  .password {
    background-color: #ecebf1;
    width: 15%;
    margin-right: 7px;
  }

  .disabled {
    background-color: transparent;
    width: 15%;
    margin-right: 7px;
  }

  .name-length {
    display: inline-block;
    line-height: 14px;
    float: right;
  }

  .cvc-block {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .error {
    outline: 1px solid #ff9e9e;
    outline-offset: -1px;
    background-color: #ffc6c6;
  }
`;

const InputFieldContainer = ({ children, ...rest }) => {
  return (
    <StyledInputFieldContainer className="input-container" {...rest}>
      {children}
    </StyledInputFieldContainer>
  );
};

export default InputFieldContainer;
