import { ReactNode } from 'react';

import * as styled from './Tooltip.styled';

const Tooltip = ({ children, message }: { children: ReactNode; message: string }) => {
  return (
    <styled.Container>
      {children}
      <styled.Tooltip>{message}</styled.Tooltip>
    </styled.Container>
  );
};

export default Tooltip;
