import { useEffect } from 'react';

export default function Main({ navigate }) {
  useEffect(() => {
    navigate('/add-card');

    return () => {};
  }, []);

  return <></>;
}
