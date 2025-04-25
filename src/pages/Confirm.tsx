import { css } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { Flex } from '@/components/common/Flex';
import { Text } from '@/components/common/Text';

export const Confirm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goActiveCard = () => {
    navigate('/card/activate');
  };

  if (location.state === null) {
    return (
      <Flex width="100%" height="100dvh">
        <Flex direction="column" width="100%" gap="40px" padding="0 30px">
          <Text
            variant="Title"
            fontWeight="bold"
            css={css`
              text-align: center;
            `}
          >
            카드 정보가 없어요.
          </Text>
          <Button isRounded onClick={goActiveCard}>
            카드 등록하러 가기
          </Button>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex width="100%" height="100dvh">
      <Flex direction="column" width="100%" gap="40px" padding="0 30px">
        <img src="./images/check.png" width={80} />
        <Text
          variant="Title"
          fontWeight="bold"
          css={css`
            text-align: center;
          `}
        >
          {`${location.state.cardNumber.value}로 시작하는\n ${location.state.brand} 카드가 등록되었어요.`}
        </Text>
        <Button isRounded onClick={goActiveCard}>
          확인
        </Button>
      </Flex>
    </Flex>
  );
};
