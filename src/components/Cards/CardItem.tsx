import { useCallback, useMemo } from 'react';
import { CARD_ISSUER } from '../../constants';
import Button from '../Common/Button';
import Flex from '../Common/Flex';
import Text from '../Common/Text';
import type { Card } from '../../types/api';
import { css } from '@emotion/react';
import useMutation from '../../hooks/useMutation';

export default function CardItem(props: { data: Card; onDelete: () => void }) {
  const mutation = useMutation({
    method: 'delete',
    url: `${import.meta.env.BASE_URL}cards/${props.data.id}`,
    onSuccess: props.onDelete,
    onError: () => window.alert('카드를 삭제하지 못했어요'),
  });

  const issuer = useMemo(() => {
    return Object.entries(CARD_ISSUER).find(([, info]) => info.issuerCode === props.data.issuerCode);
  }, [props.data.issuerCode]);

  const cardNumberSegments = useMemo(() => {
    return props.data.number.split('').reduce(
      (prev, cur) => {
        const newArray = [...prev];
        const lastIndex = newArray.length - 1;
        if (newArray[lastIndex].length < 4) newArray[lastIndex] = newArray[lastIndex] + cur;
        else newArray.push(cur);
        return newArray;
      },
      [''],
    );
  }, [props.data.number]);

  const handleDelete = useCallback(() => {
    if (!window.confirm(`${cardNumberSegments[0]}로 시작하는 카드를 삭제할게요`)) return;
    mutation.mutate();
  }, [cardNumberSegments, mutation]);

  return (
    <Flex
      gap={12}
      alignItems="center"
      customStyle={css`
        border: 1px solid var(--color-gray-200);
        border-radius: var(--radius-s);
        padding: var(--spacing-14);
      `}
      data-id={props.data.id}
    >
      <Flex
        customStyle={css`
          width: 64px;
          height: 40px;
          border-radius: var(--radius-s);
          background-color: var(--color-card-${issuer?.[0]}, var(--color-gray-400));
        `}
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
          유효기간 {props.data.expirationDate}
        </Text>
      </Flex>
      <Button variant="ghost" onClick={handleDelete}>
        ✕
      </Button>
    </Flex>
  );
}
