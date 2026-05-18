import Flex from '../Common/Flex';
import Text from '../Common/Text';
import { Link } from 'react-router';
import type { CardsResponse } from '../../types';
import CardItem from './CardItem';

export default function Cards(props: { cards: CardsResponse }) {
  return (
    <Flex direction="column" gap={16}>
      <Flex direction="column" gap={16}>
        {props.cards.map((card, index) => (
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
  );
}
