import { Title } from '@/core/components/title';
import { ContentBox } from '@/core/components/contentBox';
import { List } from '@/core/components/list';
import { CreditCard } from '@/core/components/creditCard';
import { IconButton } from '@/core/components/iconButton';
import { Button } from '@/core/components/button';

import { useCards } from './hooks/useCards';

export const Cards = () => {
  const { cards, error, isLoading, hasFetched } = useCards();
  return (
    <ContentBox>
      <Title>보유 카드 ({cards?.length})</Title>
      {isLoading && <>loading</>}
      {error && <>error</>}
      {hasFetched && !cards?.length && <div>no data</div>}
      <List>
        {cards?.map((card) => {
          return (
            <List.Item
              key={card.id}
              left={<CreditCard size="small" />}
              right={<IconButton icon="close" />}
              title={card.card}
              content={card.cardNumbers}
              description={`${card.expirationDate.month}/${card.expirationDate.year}`}
            />
          );
        })}
      </List>
      <Button variant="placeholder" block>
        + 카드 추가
      </Button>
    </ContentBox>
  );
};
