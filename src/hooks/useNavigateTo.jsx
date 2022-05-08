import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export default function useNavigateTo(nextPath) {
  const navigate = useNavigate();

  const handler = useCallback((e = null) => {
    e && e.preventDefault();

    navigate(nextPath);
  }, []);

  return handler;
}
