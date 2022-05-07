import { useNavigate } from 'react-router';
import { useCallback } from 'react';

export default function useSubmit(nextPath) {
  const navigate = useNavigate();

  const handler = useCallback(e => {
    e.preventDefault();

    navigate(nextPath);
  }, []);

  return handler;
}
