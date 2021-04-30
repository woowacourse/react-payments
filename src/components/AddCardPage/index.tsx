import AddCardForm from './AddCardForm';
import Template from '../shared/Template';

const TITLE = '카드추가';

const AddCardPage = () => {
  return (
    <Template title={TITLE} hasPreviousPage>
      <AddCardForm />
    </Template>
  );
};

export default AddCardPage;
