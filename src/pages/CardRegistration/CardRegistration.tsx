import CardRegistrationForm from '../../components/CardRegistrationForm';

type CardRegistrationProps = {
  setPageCardAlias: () => void;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
};

const CardRegistration = ({ setPageCardAlias, setCurrentId }: CardRegistrationProps) => {
  return <CardRegistrationForm setPageCardAlias={setPageCardAlias} setCurrentId={setCurrentId} />;
};

export default CardRegistration;
