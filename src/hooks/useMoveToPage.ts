import { NavigateOptions, useNavigate } from 'react-router-dom';

import { PATH } from '../constants';

type PathKey = keyof typeof PATH;

function useMoveToPage(key: PathKey) {
  const navigate = useNavigate();

  const navigateToPage = (state?: NavigateOptions['state']) => {
    navigate(`/${PATH[key]}`, { state });
  };

  return { navigateToPage };
}

export default useMoveToPage;
