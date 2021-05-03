import Template from '../shared/Template';

import CardList from './CardList';

const TITLE = '보유카드';

const CardListPage = () => {
  return (
    <Template title={TITLE}>
      <CardList />
    </Template>
  );
};

export default CardListPage;
