import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/add-card');

    return () => {};
  }, []);

  return <></>;
}
