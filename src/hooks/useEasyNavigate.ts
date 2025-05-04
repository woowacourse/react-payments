import { useNavigate } from 'react-router-dom';

const useEasyNavigate = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate('/');
  };

  const goPage = (path: string) => {
    navigate(path);
  };

  return { goBack, goHome, goPage };
};

export default useEasyNavigate;
