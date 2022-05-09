import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useNavigateTo(nextPath) {
  const navigate = useNavigate();

  const handler = useCallback((e = null) => {
    e && e.preventDefault();

    navigate(nextPath);
  }, []);

  return handler;
}
