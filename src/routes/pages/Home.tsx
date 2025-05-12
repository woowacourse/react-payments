import { useNavigate } from 'react-router';

import { AppLayout } from '@/components/common/AppLayout';
import { Button } from '@/components/common/Button';
import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <Flex direction="column" gap="20px" width="80%" margin="0 auto">
        <Text variant="Title" fontWeight="bold">
          우테코 자동 결제 서비스 이용을 위해
        </Text>
        <Text variant="Title" fontWeight="bold">
          카드 등록 페이지로 이동해주세요.
        </Text>
        <Button height="60px" borderType="rounded" onClick={() => navigate('/register')}>
          <Text variant="Title" fontWeight="medium" color="white">
            카드 등록하러 가기
          </Text>
        </Button>
      </Flex>
    </AppLayout>
  );
};
