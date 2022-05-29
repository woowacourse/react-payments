import React, { useCallback, useMemo } from 'react';
import useCardState from '@/hooks/useCardState';
import { CARD_NUMBER } from '@/constants';

const CardContext = React.createContext(null);

function CardContextProvider({ children }) {
  const [state, dispatch] = useCardState();

  const onChangeTextField = useCallback(
    ({ target }, option = {}) => {
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
