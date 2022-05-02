import React, { useCallback, useContext } from 'react';
import * as S from '../styles.js';
import Dimmer from './Dimmer';
import CardContext from '../CardContext';

export default function ToastModal({ type, show, children }) {
  const { dispatch } = useContext(CardContext);

  const onClickDimmer = useCallback(() => {
    dispatch({ type: type, flag: false });
  }, []);

  return (
    <>
      <Dimmer show={show} onClick={onClickDimmer} />
      <S.ToastModal show={show}>{children}</S.ToastModal>
    </>
  );
}
