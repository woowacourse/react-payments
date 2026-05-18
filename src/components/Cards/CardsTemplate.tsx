import View from '../Common/View';
import Flex from '../Common/Flex';
import Text from '../Common/Text';
import CardItem from './CardItem';
import { Link } from 'react-router';
import type { CardsResponse } from '../../types';

export default function CardsTemplate(props: { data: CardsResponse }) {
  return (
    <View>
      <Flex direction="column" gap={16} style={{ width: '100%', height: '100%' }}>
        <Text.H1 size="l" weight="bold">
          보유 카드 ({props.data.length})
        </Text.H1>
        <Flex direction="column" gap={16}>
          <Flex direction="column" gap={16}>
            {props.data.map((card, index) => (
              <CardItem key={index} card={card} />
            ))}
          </Flex>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Flex
              alignItems="center"
              justifyContent="center"
              style={{
                width: '100%',
                height: '44px',
                border: '1px dashed var(--color-gray-200)',
                borderRadius: '3px',
              }}
            >
              <Text color="description">+ 카드 추가</Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </View>
  );
}
