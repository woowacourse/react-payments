import { CardLists } from '../components/CardList/CardLists';
import { PageTitle } from '../components/common/PageTitle';
import { Layout } from '../components/common/styled';

export const CardListPage = () => {
  return (
    <Layout>
      <PageTitle>보유카드</PageTitle>
      <CardLists />
    </Layout>
  );
};
