import { useLocation, useNavigate } from 'react-router';

import { AppLayout } from '@/components/common/AppLayout';
import { Button } from '@/components/common/Button';
import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';
import { CardBrandsType } from '@/components/features/CardPreview/cardBrand.types';
import { CompleteImage } from '@/components/features/CompleteIcon';

type ResultProps = {
  cardType: CardBrandsType;
  cardNumber: string;
};

export const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { cardType, cardNumber } = location.state as ResultProps;

  return (
    <AppLayout>
      <Flex direction="column" gap="20px" width="80%" margin="0 auto">
        {cardType && cardNumber ? (
          <>
            <CompleteImage />
            <Text variant="Title" fontWeight="bold">
              {`${cardNumber}로 시작하는`}
            </Text>
            <Text variant="Title" fontWeight="bold">
              {`${cardType}가 등록되었습니다.`}
            </Text>
          </>
        ) : (
          <div>
            <Text variant="Title" fontWeight="bold">
              카드 정보가 없습니다.
            </Text>
          </div>
        )}
        <Button height="60px" borderType="rounded" onClick={() => navigate('/')}>
          <Text variant="Title" fontWeight="medium" color="white">
            홈으로 이동
          </Text>
        </Button>
      </Flex>
    </AppLayout>
  );
};
