import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirection = (condition: boolean) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (condition) {
      navigate('/');
    }
  }, [navigate, condition]);
};

export default useRedirection;
