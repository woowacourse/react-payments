import AddCardForm from '../../components/AddCard/AddCardForm';
import AddCardTemplate from '../../components/AddCard/AddCardTemplate';

const title = '카드추가';

const AddCardPage = () => {
  return (
    <AddCardTemplate title={title} hasPreviousPage>
      <AddCardForm />
    </AddCardTemplate>
  );
};

export default AddCardPage;
