import Flex from '../Common/Flex';
import Text from '../Common/Text';
import Button from '../Common/Button';
import { Link } from 'react-router';
import View from '../Common/View';

export default function CardsEmptyTemplate() {
  return (
    <View>
      <Flex direction="column" gap={16}>
        <Text.H1 size="l" weight="bold">
          보유 카드
        </Text.H1>
        <Flex alignItems="flex-end" style={{ width: '100%', height: '330px' }}>
          <Flex direction="column" alignItems="center" gap={8} style={{ width: '100%' }}>
            <Flex
              style={{
                width: '160px',
                height: '100px',
                border: '1px dashed var(--color-gray-200)',
                backgroundColor: 'var(--color-gray-100)',
              }}
            ></Flex>
            <Text size="xl" weight="bold">
              등록된 카드가 없습니다
            </Text>
            <Text size="s" color="description">
              아래 버튼을 눌러 첫 카드를 등록해보세요
            </Text>
            <Link to="/" style={{ width: '100%' }}>
              <Button style={{ width: '100%' }}>카드 추가하기</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
}
