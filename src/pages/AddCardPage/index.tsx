import AddCardForm from '../../components/add/AddCardForm';
import Template from '../../components/shared/Template';
import { ADD_CARD_PAGE_TITLE } from '../../constants/title';

const AddCardPage = () => {
  return (
    <Template title={ADD_CARD_PAGE_TITLE} hasPreviousPage>
      <AddCardForm />
    </Template>
  );
};

export default AddCardPage;
