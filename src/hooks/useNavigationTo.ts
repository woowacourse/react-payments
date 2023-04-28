import { useNavigate } from 'react-router-dom';

export const useNavigationTo = (path: string) => {
  const navigation = useNavigate();

  const navigationTo = () => {
    navigation(path);
  };

  return navigationTo;
};
