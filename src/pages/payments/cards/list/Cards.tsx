import { useNavigate } from 'react-router';

import { Title } from '@/core/components/title';
import { ContentBox } from '@/core/components/contentBox';
import { SymbolInfo } from '@/core/components/symbolInfo';
import { List } from '@/core/components/list';
import { CreditCard } from '@/core/components/creditCard';
import { IconButton } from '@/core/components/iconButton';
import { Button } from '@/core/components/button';

import { ROUTES } from '@/constants/routes';

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

  const navigate = useNavigate();

  const handleGoToRegiterCard = () => {
    navigate(ROUTES.PAYMENTS.REGISTER);
  };

  if (status === 'loading')
    return (
      <ContentBox>
        <Title>보유 카드</Title>
        <List>
          {Array.from({ length: 3 }).map((_, index) => {
            return <List.ItemSkeleton key={index} left={true} title={true} content={true} description={true} />;
          })}
        </List>
      </ContentBox>
    );

  if (status === 'error')
    return (
      <ContentBox>
        <Title>보유 카드</Title>
        <SymbolInfo
          symbol="info"
          description="잠시 후 다시 시도해 주세요."
          action={
            <Button variant="primary" block>
              다시 시도
            </Button>
          }
        >
          카드 목록을 불러올 수 없어요
        </SymbolInfo>
      </ContentBox>
    );

  if (status === 'success' && !cards.length)
    return (
      <ContentBox>
        <Title>보유 카드</Title>
        <SymbolInfo
          symbol="info"
          description="아래 버튼을 눌러 첫 카드를 등록해보세요"
          action={
            <Button variant="primary" block onClick={handleGoToRegiterCard}>
              + 카드 추가하기
            </Button>
          }
        >
          등록된 카드가 없습니다
        </SymbolInfo>
      </ContentBox>
    );

  return (
    <ContentBox>
      <Title>보유 카드 ({cards?.length})</Title>
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
      <Button variant="placeholder" block onClick={handleGoToRegiterCard}>
        + 카드 추가
      </Button>
    </ContentBox>
  );
};
