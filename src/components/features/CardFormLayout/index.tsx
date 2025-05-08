import { ReactNode } from 'react';

import { Flex } from '../../common/Flex';

export const CardFormLayout = ({ children }: { children: ReactNode }) => {
  return (
    <form>
      <Flex direction="column" gap="10px" margin="30px 0" flex={0}>
        {children}
      </Flex>
    </form>
  );
};
