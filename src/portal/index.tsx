import React from 'react';
import reactDom from 'react-dom';

function ModalPortal({ children }: any) {
  const element = document.getElementById('modal');
  return reactDom.createPortal(children, element as Element);
}

export default ModalPortal;
