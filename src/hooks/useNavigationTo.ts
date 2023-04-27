import { useNavigate } from 'react-router-dom';

export const useNavigationTo = (path: string) => {
  const navigation = useNavigate();

  navigation(path);
};
