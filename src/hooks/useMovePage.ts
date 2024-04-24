import { useNavigate } from 'react-router-dom';

const useMovePage = <T extends Record<string, unknown>>() => {
  const navigate = useNavigate();

  const handleMovePage = (endpoint: string, state?: T) => {
    navigate(endpoint, {
      state,
    });
  };

  return handleMovePage;
};

export default useMovePage;
