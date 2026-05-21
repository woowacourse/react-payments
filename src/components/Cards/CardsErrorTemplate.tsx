import { css } from '@emotion/react';
import { Link } from 'react-router';
import View from '../Common/View';
import Flex from '../Common/Flex';
import Text from '../Common/Text';
import Button from '../Common/Button';
import styled from '@emotion/styled';

const Image = styled.img`
  width: 64px;
  height: 64px;
`;

export default function CardsErrorTemplate() {
  return (
    <View>
      <Flex direction="column" gap={16}>
        <Text.H1 size="l" weight="bold">
          보유 카드
        </Text.H1>
        <Flex alignItems="flex-end" customStyle={css`width: 100%; height: 330px;`}>
          <Flex direction="column" alignItems="center" gap={8} customStyle={css`width: 100%;`}>
            <Image alt={`error icon`} src={`${import.meta.env.BASE_URL}error.svg`} />
            <Text size="xl" weight="bold">
              카드 목록을 불러올 수 없어요
            </Text>
            <Text size="s" color="description">
              잠시 후 다시 시도해 주세요.
            </Text>
            <Link to="/" style={{ width: '100%' }}>
              <Button customStyle={css`width: 100%;`}>다시 시도</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
