import React, { memo } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const StyledModal = styled.div`
  animation: fadein 0.3s;
  background: #bddffe75;
  border-radius: 3px;
  display: inline-block;
  font-size: 12px;
  height: 23px;
  line-height: 23px;
  margin-left: 15px;
  text-align: center;
  vertical-align: middle;
  width: 200px;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

function Modal({ visible, description }) {
  return <>{visible && <StyledModal>{description}</StyledModal>}</>;
}

Modal.propTypes = {
  visible: PropTypes.bool,
  description: PropTypes.string,
};

export default memo(Modal);
