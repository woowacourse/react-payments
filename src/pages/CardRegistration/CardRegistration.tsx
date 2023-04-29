import CardRegistrationForm from '../../components/CardRegistrationForm';

type CardRegistrationProps = {
  setPageCardList: () => void;
};

const CardRegistration = ({ setPageCardList }: CardRegistrationProps) => {
  return <CardRegistrationForm setPageCardList={setPageCardList} />;
};

export default CardRegistration;
