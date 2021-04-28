import AddCardForm from '../../components/add/AddCardForm';
import AddCardTemplate from '../../components/add/AddCardTemplate';

const title = '카드추가';

const AddCardPage = () => {
  return (
    <AddCardTemplate title={title} hasPreviousPage>
      <AddCardForm />
    </AddCardTemplate>
  );
};

export default AddCardPage;
