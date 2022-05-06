import { useCallback, useContext } from 'react';
import * as S from 'styles.js';
import { CardDispatchContext } from 'store/card/CardContext';
import Dimmer from './Dimmer/Dimmer';

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
