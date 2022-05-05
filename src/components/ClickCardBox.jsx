import React, { useContext, useCallback } from 'react';

import { TYPES, CardDispatchContext } from 'context/CardContext.jsx';

export default function ClickCardBox({ children }) {
  const dispatch = useContext(CardDispatchContext);

  const onClickCard = useCallback(() => {
    dispatch({ type: TYPES.SET_LIST_MODAL_FLAG, flag: true });
  }, []);

  return <div onClick={onClickCard}>{children}</div>;
}
