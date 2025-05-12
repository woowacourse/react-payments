import { StyledCompleteIcon } from './Complete.styled';

import { Flex } from '@/components/common/Flex';

export const CompleteImage = () => {
  return (
    <StyledCompleteIcon>
      <Flex justifyContent="center" alignItems="center" width="100%" height="100%">
        <img src="./icon/Vector3.png" alt="complete" width="32px" height="20px" />
      </Flex>
    </StyledCompleteIcon>
  );
};
