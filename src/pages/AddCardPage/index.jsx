import { CardFormProvider } from '../../context/card-form-context';
import AddCardForm from '../../components/AddCardForm';

const AddCardPage = () => {
  return (
    <CardFormProvider>
      <AddCardForm />
    </CardFormProvider>
  );
};

export default AddCardPage;
