import * as reactDom from 'react-dom';
import * as React from 'react';

import { ModalState } from 'types';
import { MODAL_STATE } from 'constants/';
import Container from './styles';

interface PropTypes {
  state: ModalState;
  className?: string;
  onClickDimmer?: React.MouseEventHandler<HTMLDivElement>;
  onHiddenEnd?: React.AnimationEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

function Modal({ state, onClickDimmer, onHiddenEnd, children }: PropTypes) {
  const onAnimationEnd = (event) => {
    if (state === MODAL_STATE.VISIBLE) return;

    onHiddenEnd(event);
  };

  const ModalContainer = (
    <Container className={state} onClick={onClickDimmer} onAnimationEnd={onAnimationEnd}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </Container>
  );

  const $root = document.getElementById('root');
  return reactDom.createPortal(ModalContainer, $root);
}

Modal.defaultProps = {
  className: MODAL_STATE.HIDDEN,
  handleClose: () => {},
  handleHidden: () => {},
};

export default Modal;
