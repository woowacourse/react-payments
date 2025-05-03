import CardNumbersInput from '../../components/CardNumbersInput/CardNumbersInput';
import CardExpiryInput from '../../components/CardExpiryInput/CardExpiryInput';
import CVCInput from '../../components/CVCInput/CVCInput';
import CardPreview from '../../components/CardPreview/CardPreview';
import CardBrandInput from '../../components/CardBrandInput/CardBrandInput';
import CardPasswordInput from '../../components/CardPasswordInput/CardPasswordInput';
import { useCardFormContext } from '../../context/CardFormContext';
import Button from '../../components/common/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../App.css';

const CardRegisterPage = () => {
  const { cardNumbers, cardBrand, expiryDate, CVCNumber, isFormComplete } =
    useCardFormContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      // cardNumbers,
      // brand,
    };
    navigate('/react-payments/complete', { state: formData });
  };

  // useEffect(() => {
  //   resetForm();
  // }, [location.state]);

  // const isFormComplete =
  // cardNumberComplete &&
  // brandComplete; -> Context

  return (
    <div className="app">
      <CardPreview />
      <form onSubmit={handleSubmit}>
        {CVCNumber.isComplete && <CardPasswordInput />}
        {expiryDate.isComplete && <CVCInput />}
        {cardBrand.isComplete && <CardExpiryInput />}
        {cardNumbers.isComplete && <CardBrandInput />}
        <CardNumbersInput />
        {isFormComplete && <Button text="확인" />}
      </form>
    </div>
  );
};

export default CardRegisterPage;
