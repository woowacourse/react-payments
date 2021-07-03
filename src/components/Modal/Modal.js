import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  return (
    <section
      className="max-w-375 max-h-701 mt-5 p-5 mx-auto flex fixed inset-0 z-10 bg-gray-400 bg-opacity-70 rounded-3xl"
      role="dialog"
      aria-modal="true"
      aria-label="카드사 선택 modal"
    >
      <div
        className={`absolute flex items-center p-7 rounded-3xl rounded-b-none bg-white left-0 bottom-0 
        ${props.width || 'w-full'} ${props.height || 'h-227'}`}
      >
        {props.children}
      </div>
    </section>
  );
};

export default Modal;

Modal.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
