import CardNumbers from '../components/CardNumbers/CardNumbers';
import ExpiredDate from '../components/ExpiredDate/ExpiredDate';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';

const AddCard = () => {
  return (
    <>
      <CardNumbers />
      <ExpiredDate />
      <CardOwnerName />
    </>
  );
};

export default AddCard;
