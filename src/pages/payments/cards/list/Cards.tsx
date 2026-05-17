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

const formatCardNumberForMasking = (maskedNumber: string, mask: string = '*'): string => {
  const compact = maskedNumber.replace(/\s/g, '');

  const visibleHead = compact.slice(0, 4);
  const visibleTail = compact.slice(-4);

  const maskLength = compact.length - visibleHead.length - visibleTail.length;

  const displayNumber = `${visibleHead}${mask.repeat(maskLength)}${visibleTail}`;

  return displayNumber.replace(/(.{4})/g, '$1 ').trim();
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
          const maskedCardNumbers = formatCardNumberForMasking(card.cardNumbers);
          return (
            <List.Item
              key={card.id}
              left={<CreditCard size="small" />}
              right={<IconButton icon="close" />}
              title={cardName}
              content={maskedCardNumbers}
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
