import PAGE from '../../constants/pages';
import Template from '../shared/Template';

import CardList from './CardList';

const CardListPage = () => {
  return (
    <Template title={PAGE.CARD_LIST.NAME}>
      <CardList />
    </Template>
  );
};

export default CardListPage;
