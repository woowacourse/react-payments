import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Dimmed = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000080;
  z-index: 10;
`;

const Container = styled.div``;

const Modal = ({ children, onClickDimmed }) => {
  return (
    <Container>
      <Dimmed onClick={onClickDimmed} />
      {children}
    </Container>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  onClickDimmed: PropTypes.func,
};

export default Modal;
