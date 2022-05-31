import React, { useCallback, useMemo } from 'react';
import useCardState from '@/hooks/useCardState';

import { Children, InputCardState, Option, TextFieldEvent } from '@/types';
import { CARD_NUMBER } from '@/constants';

const CardContext = React.createContext<InputCardState | null>(null);

function CardContextProvider({ children }: Children) {
  const { state, dispatch } = useCardState();

  const onChangeTextField = useCallback(
    ({ target }: TextFieldEvent, option: Option) => {
      const textFieldName = target.name;

      switch (textFieldName) {
        case CARD_NUMBER.TEXT_FIELD_NAME:
          dispatch({
            type: textFieldName,
            contents: { index: option.index, value: target.value },
          });
          break;

        default:
          dispatch({
            type: textFieldName,
            contents: target.value,
          });
      }
    },
    [dispatch],
  );

  return (
    <CardContext.Provider
      value={useMemo(() => ({ ...state, onChangeTextField }), [state, onChangeTextField])}
    >
      {children}
    </CardContext.Provider>
  );
}

export { CardContext, CardContextProvider };
