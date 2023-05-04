import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useIsAccessAliasPageContext } from '../context/IsAccessAliasPageProvider';

// TODO: 이녀석이 진짜 필요할까?
const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { isAccessAliasPage } = useIsAccessAliasPageContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAccessAliasPage) {
      navigate('/');
    }
  }, [isAccessAliasPage, navigate]);

  return <>{children}</>;
};

export default PrivateRoute;
