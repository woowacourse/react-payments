import React from 'react';

import ToastModalStyled from './style';

const ToastModal = ({ show, children }) => {
  return <ToastModalStyled show={show}>{children}</ToastModalStyled>;
};

export default ToastModal;
