import { CARD_ISSUER } from '../../constants';
import type { Card } from '../../types';
import Flex from '../Common/Flex';
import Text from '../Common/Text';

export default function CardItem(props: { card: Card }) {
  const issuer = Object.entries(CARD_ISSUER).find(([, info]) => info.issuerCode === props.card.issuerCode);

  const cardNumberSegments = props.card.number.split('').reduce(
    (prev, cur) => {
      const newArray = [...prev];
      const lastIndex = newArray.length - 1;
      if (newArray[lastIndex].length < 4) newArray[lastIndex] = newArray[lastIndex] + cur;
      else newArray.push(cur);
      return newArray;
    },
    [''],
  );

  return (
    <Flex
      gap={12}
      alignItems="center"
      style={{
        border: '1px solid var(--color-gray-200)',
        borderRadius: '3px',
        padding: '14px',
      }}
    >
      <Flex
        style={{
          width: '64px',
          height: '40px',
          borderRadius: '3px',
          backgroundColor: `var(--color-card-${issuer?.[0]}, var(--color-gray-400))`,
        }}
      ></Flex>
      <Flex direction="column">
        <Text size="l">{issuer?.[1].label ?? '알 수 없는 카드'}</Text>
        <Flex gap={4}>
          {cardNumberSegments.map((segment, segmentIndex) => (
            <Text.Span key={segmentIndex} size="s" color="description">
              {segment}
            </Text.Span>
          ))}
        </Flex>
        <Text size="xs" color="description">
          유효기간 {props.card.expirationDate}
        </Text>
      </Flex>
    </Flex>
  );
}
