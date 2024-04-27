import { AddCardFormProvider } from '../../../context/AddCardFormContext';
import AddCardForm from '../../AddCardForm/AddCardForm';

export default function AddCardPage() {
  return (
    <AddCardFormProvider>
      <AddCardForm />
    </AddCardFormProvider>
  );
}
