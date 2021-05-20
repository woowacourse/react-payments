import AddCardForm from './AddCardForm';
import Template from '../shared/Template';
import PAGE from '../../constants/pages';

const AddCardPage = () => {
  return (
    <Template title={PAGE.ADD_CARD.NAME} prevPagePath={PAGE.CARD_LIST.PATH}>
      <AddCardForm />
    </Template>
  );
};

export default AddCardPage;
