import AddCardForm from '../../components/AddCard/AddCardForm';
import AddCardTemplate from '../../components/AddCard/AddCardTemplate';

const TITLE = '카드추가';

const AddCardPage = () => {
  return (
    <AddCardTemplate title={TITLE} hasPreviousPage>
      <AddCardForm />
    </AddCardTemplate>
  );
};

export default AddCardPage;
