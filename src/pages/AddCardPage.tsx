import AddCardContainer from '../components/payments/AddCardContainer';
import { CardInformationProvider } from '../context/CardInformationContext';

const AddCardPage = () => {
  return (
    <CardInformationProvider>
      <AddCardContainer />
    </CardInformationProvider>
  );
};

export default AddCardPage;
