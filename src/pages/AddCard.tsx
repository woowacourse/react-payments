import CardNumbers from '../components/CardNumbers/CardNumbers';
import ExpiredDate from '../components/ExpiredDate/ExpiredDate';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';
import SecurityCode from '../components/SecurityCode/SecurityCode';
import CardPassword from '../components/CardPassword/CardPassword';

const AddCard = () => {
  return (
    <>
      <CardNumbers />
      <ExpiredDate />
      <CardOwnerName />
      <SecurityCode />
      <CardPassword />
    </>
  );
};

export default AddCard;
