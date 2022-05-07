import { useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';
import reducer from 'reducer/header';

const initialState = {
  title: '',
  left: null,
  right: null,
};

const useHeader = () => {
  const location = useLocation();
  const [header, dispatch] = useReducer(reducer, initialState);
  const { title, left, right } = header;

  useEffect(() => {
    dispatch({ location: location.pathname });
  }, [location]);

  return { title, left, right };
};

export default useHeader;
