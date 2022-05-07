import React from 'react';
import styled from 'styled-components';

const Field = ({ children, ...rest }) => {
  return <StyledField {...rest}>{children}</StyledField>;
};

const StyledField = styled.div`
  margin: 16px 0;
  position: relative;

  .transparent {
    background-color: transparent;
  }

  .password {
    background-color: #ecebf1;
    width: 15%;
    margin-right: 7px;
  }

  .name-length {
    display: inline-block;
    font-size: 12px;
    line-height: 14px;
    float: right;
    color: #525252;
  }

  .cvc-block {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export default Field;
