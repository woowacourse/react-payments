import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export default function useSubmit(nextPath) {
  const navigate = useNavigate();

  const handler = useCallback(e => {
    e.preventDefault();

    navigate(nextPath);
  }, []);

  return handler;
}
