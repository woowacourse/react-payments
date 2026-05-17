import { Title } from '@/core/components/title';
import { ContentBox } from '@/core/components/contentBox';
import { List } from '@/core/components/list';
import { CreditCard } from '@/core/components/creditCard';
import { IconButton } from '@/core/components/iconButton';
import { Button } from '@/core/components/button';

import { useCards } from './hooks/useCards';

import { ISSUER_CODE } from './constants';

const getCardNameByCard = (card: string) => {
  const current = Object.values(ISSUER_CODE).find((cardInfo) => {
    return cardInfo.card === card;
  });
  return current?.name;
};

export const Cards = () => {
  const { status, data: cards } = useCards();
  return (
    <ContentBox>
      <Title>보유 카드 ({cards?.length})</Title>
      {status === 'loading' && <>loading</>}
      {status === 'error' && <>error</>}
      {status === 'success' && !cards.length && <div>no data</div>}
      <List>
        {cards?.map((card) => {
          const cardName = getCardNameByCard(card.card);
          return (
            <List.Item
              key={card.id}
              left={<CreditCard size="small" />}
              right={<IconButton icon="close" />}
              title={cardName}
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
