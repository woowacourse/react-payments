import { useContext, useCallback } from 'react';

import { CardDispatchContext } from 'store/card/CardContext';
import { TYPES } from 'store/card/types';
import PointerBox from 'components/PointerBox/PointerBox';

export default function ClickCardBox({ children }) {
  const dispatch = useContext(CardDispatchContext);

  const onClickCard = useCallback(() => {
    dispatch({ type: TYPES.SET_LIST_MODAL_FLAG, flag: true });
  }, []);

  return <PointerBox onClick={onClickCard}>{children}</PointerBox>;
}
