import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RegisterCard = () => {
  const navigate = useNavigate();
  const state = useLocation().state;

  useEffect(() => {
    if (!state) navigate('/');
  }, [state, navigate]);

  return <p />;
};

export default RegisterCard;
