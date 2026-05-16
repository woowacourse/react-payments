import { Title } from '@/core/components/title';
import { ContentBox } from '@/core/components/contentBox';
import { List } from '@/core/components/list';
import { CreditCard } from '@/core/components/creditCard';
import { IconButton } from '@/core/components/iconButton';
import { Button } from '@/core/components/button';

export const Cards = () => {
  return (
    <ContentBox>
      <Title>보유 카드 (3)</Title>
      <List>
        <List.Item
          left={<CreditCard size="small" />}
          right={<IconButton icon="close" />}
          title="BC카드"
          content="5511 **** **** 9012"
          description="유효기간 12/28"
        />
      </List>
      <Button variant="placeholder" block>
        + 카드 추가
      </Button>
    </ContentBox>
  );
};
