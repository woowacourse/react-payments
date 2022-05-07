import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { CardInfoContext } from 'App';
import { validator } from 'utils';
import { ERROR_MESSAGE, ACTION } from 'constants';

function CardNameInputForm({ children }) {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(CardInfoContext);
  const { nickname } = state.card;

  const isNumber = (nickname) => {
    return !isNaN(Number(nickname));
  };

  const isBlank = (nickname) => {
    return nickname.trim().length === 0;
  };

  const checkCardNameInput = (nickname) => {
    validator([
      {
        checker: () => isBlank(nickname),
        errorMsg: ERROR_MESSAGE.NICKNAME_IS_BLANK,
      },
      {
        checker: () => isNumber(nickname),
        errorMsg: ERROR_MESSAGE.NICKNAME_NOT_STRING,
      },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      checkCardNameInput(nickname);
      dispatch({ type: ACTION.ADD_CARD });
      console.log(state);
      navigate('/react-payments');
    } catch (error) {
      alert(error.message);
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
}

export default CardNameInputForm;
