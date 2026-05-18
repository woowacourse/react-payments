import View from '../Common/View';
import Text from '../Common/Text';
import Flex from '../Common/Flex';
import CardItemSkeleton from '../Cards/CardItemSkeleton';
import VisuallyHidden from '../Common/VisuallyHidden';

export default function CardsSkeletonTemplate() {
  return (
    <View>
      <VisuallyHidden>카드 목록 로딩 중</VisuallyHidden>
      <Flex direction="column" gap={16}>
        <Text.H1 size="l" weight="bold">
          보유 카드
        </Text.H1>
        <Flex direction="column" gap={16}>
          {Array.from({ length: 3 }).map((_, index) => (
            <CardItemSkeleton key={index} />
          ))}
        </Flex>
        <Flex
          style={{
            width: '100%',
            height: '44px',
            border: '1px dashed var(--color-gray-200)',
            borderRadius: '3px',
            backgroundColor: 'var(--color-gray-100)',
          }}
        ></Flex>
      </Flex>
    </View>
  );
}
