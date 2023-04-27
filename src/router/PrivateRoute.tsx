import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useIsAccessAliasPageContext } from '../context/IsAccessAliasPageProvider';

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { isAccessAliasPage } = useIsAccessAliasPageContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAccessAliasPage) {
      navigate('/');
    }
  }, []);

  return <>{children}</>;
};

export default PrivateRoute;
