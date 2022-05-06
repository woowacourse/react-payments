import { useCallback, useContext } from 'react';
import { CardDispatchContext } from 'store/card/CardContext';
import Dimmer from '../Dimmer';
import styled from 'styled-components';

export default function ToastModal({ type, show, children }) {
  const dispatch = useContext(CardDispatchContext);

  const onClickDimmer = useCallback(() => {
    dispatch({ type: type, flag: false });
  }, []);

  return (
    <>
      <Dimmer show={show} onClick={onClickDimmer} />
      <Styled.ToastModal show={show}>{children}</Styled.ToastModal>
    </>
  );
}

const Styled = {
  ToastModal: styled.div`
    position: fixed;
    left: 0;
    bottom: ${({ show }) => (show ? 0 : -100)}%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 220px;
    padding: 34px 0;
    border-radius: 5px 5px 0 0;
    background: #fff;
    z-index: 10;
    transition: bottom 0.4s linear;
  `,
};
