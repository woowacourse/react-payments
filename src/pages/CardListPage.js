import { CardLists } from '../components/CardList/CardLists';
import { PageTitle } from '../components/common/PageTitle';
import { Layout } from '../components/common/styled';
import { getCardInfos } from '../utils/localStorage';

export const CardListPage = () => {
  const storedCardInfos = getCardInfos();

  return (
    <Layout>
      <PageTitle isRoot>보유카드</PageTitle>
      <CardLists cardInfos={storedCardInfos} />
    </Layout>
  );
};
