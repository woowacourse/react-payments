import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { CardInfoContext } from 'contexts/CardInfoContextProvider';

function CardNameForm({ children }) {
  const { state, dispatch, nextId } = useContext(CardInfoContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'REGISTER_CARD',
      card: {
        id: nextId.current,
        ...state.inputs,
      },
    });

    nextId.current += 1;

    navigate('/react-payments');
  };

  return (
    <form className="card-input-form" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default CardNameForm;
