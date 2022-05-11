import { useContext, useState } from 'react';
import { CardInfoDispatchContext } from '../components/context/CardInfoProvider';

function useInputHandler(validator, { type, key, prevData }) {
  const cardInfoDispatch = useContext(CardInfoDispatchContext);
  const [errorMessage, setErrorMessage] = useState('');

  const updateInputState = ({ name, value }) => {
    setErrorMessage('');

    try {
      validator(value);
    } catch (err) {
      setErrorMessage(err.message);
      return;
    }

    cardInfoDispatch({
      type,
      [key]: {
        ...prevData,
        [name]: value,
      },
    });
  };

  return { errorMessage, setErrorMessage, updateInputState };
}

export default useInputHandler;
