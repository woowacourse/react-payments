import AddCardForm from '../../components/add/AddCardForm';
import AddCardTemplate from '../../components/add/AddCardTemplate';
import { ADD_CARD_PAGE_TITLE } from '../../constants/title';

const AddCardPage = () => {
  return (
    <AddCardTemplate title={ADD_CARD_PAGE_TITLE} hasPreviousPage>
      <AddCardForm />
    </AddCardTemplate>
  );
};

export default AddCardPage;
