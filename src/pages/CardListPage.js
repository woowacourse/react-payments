import { CardLists } from '../components/CardList/CardLists';
import { PageTitle } from '../components/common/PageTitle';
import { Layout } from '../components/common/styled';

const cardIds = [];

export const CardListPage = () => {
  return (
    <Layout>
      <PageTitle isRoot>보유카드</PageTitle>
      <CardLists cardIds={cardIds} />
    </Layout>
  );
};
