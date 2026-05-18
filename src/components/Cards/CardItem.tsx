import { useCallback, useMemo } from 'react';
import { CARD_ISSUER } from '../../constants';
import Button from '../Common/Button';
import Flex from '../Common/Flex';
import Text from '../Common/Text';
import { useNavigate } from 'react-router';
import type { Card } from '../../types';

export default function CardItem(props: { card: Card }) {
  const navigate = useNavigate();

  const issuer = useMemo(() => {
    return Object.entries(CARD_ISSUER).find(([, info]) => info.issuerCode === props.card.issuerCode);
  }, [props.card.issuerCode]);

  const cardNumberSegments = useMemo(() => {
    return props.card.number.split('').reduce(
      (prev, cur) => {
        const newArray = [...prev];
        const lastIndex = newArray.length - 1;
        if (newArray[lastIndex].length < 4) newArray[lastIndex] = newArray[lastIndex] + cur;
        else newArray.push(cur);
        return newArray;
      },
      [''],
    );
  }, [props.card.number]);

  const handleDelete = useCallback(() => {
    const id = props.card.id;

    if (!window.confirm(`${cardNumberSegments[0]}로 시작하는 카드를 삭제할게요`)) return;

    fetch(`/cards/${id}`, {
      method: 'delete',
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        navigate(0);
      })
      .catch(() => {
        window.alert('카드를 삭제하지 못했어요');
      });
  }, [cardNumberSegments, navigate, props.card.id]);

  return (
    <Flex
      gap={12}
      alignItems="center"
      style={{
        border: '1px solid var(--color-gray-200)',
        borderRadius: '3px',
        padding: '14px',
      }}
      data-id={props.card.id}
    >
      <Flex
        style={{
          width: '64px',
          height: '40px',
          borderRadius: '3px',
          backgroundColor: `var(--color-card-${issuer?.[0]}, var(--color-gray-400))`,
        }}
      ></Flex>
      <Flex direction="column" flexGrow={1}>
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
      <Button variant="ghost" onClick={handleDelete}>
        ✕
      </Button>
    </Flex>
  );
}
