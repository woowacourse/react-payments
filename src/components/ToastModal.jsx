import React, { useCallback, useContext } from 'react';
import * as S from 'styles.js';
import Dimmer from 'components/Dimmer';
import { CardDispatchContext } from 'store/card/CardContext';

export default function ToastModal({ type, show, children }) {
  const dispatch = useContext(CardDispatchContext);

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
