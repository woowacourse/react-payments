import { useNavigate } from 'react-router-dom';

const useMovePage = <T extends Record<string, unknown>>(endpoint: string, state?: T) => {
  const navigate = useNavigate();

  const handleMovePage = () => {
    navigate(endpoint, {
      state,
    });
  };

  return handleMovePage;
};

export default useMovePage;
