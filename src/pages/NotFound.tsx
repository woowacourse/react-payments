import { useNavigate } from 'react-router-dom';

import { AppLayout } from '@/components/common/AppLayout';
import { Button } from '@/components/common/Button';
import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';

export const NotFound = () => {
  const navigate = useNavigate();

  const goActiveCard = () => {
    navigate('/card/activate');
  };
  return (
    <AppLayout>
      <Flex direction="column" width="100%" gap="40px" padding="0 30px">
        <Text variant="Title">유효하지 않은 접근이에요. 🥲</Text>
        <Button isRounded onClick={goActiveCard}>
          카드 등록하기
        </Button>
      </Flex>
    </AppLayout>
  );
};
