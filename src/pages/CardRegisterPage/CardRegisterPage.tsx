import CardNumbersInput from '../../components/CardNumbersInput/CardNumbersInput';
import CardExpiryInput from '../../components/CardExpiryInput/CardExpiryInput';
import CVCInput from '../../components/CVCInput/CVCInput';
import CardPreview from '../../components/CardPreview/CardPreview';
import CardBrandInput from '../../components/CardBrandInput/CardBrandInput';
import CardPasswordInput from '../../components/CardPasswordInput/CardPasswordInput';
import { useCardFormContext } from '../../context/CardFormContext';
import Button from '../../components/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const CardRegisterPage = () => {
  const { cardNumbers, cardBrand, expiryDate, CVCNumber, isFormComplete } =
    useCardFormContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      numbers: cardNumbers.numbers,
      brand: cardBrand.brand,
    };
    navigate('/payments/complete/', { state: formData });
  };

  return (
    <div className="app">
      <CardPreview />
      <form onSubmit={handleSubmit}>
        {CVCNumber.isDisplay && <CardPasswordInput />}
        {expiryDate.isDisplay && <CVCInput />}
        {cardBrand.isDisplay && <CardExpiryInput />}
        {cardNumbers.isDisplay && <CardBrandInput />}
        <CardNumbersInput />
        {isFormComplete && <Button text="확인" />}
      </form>
    </div>
  );
};

export default CardRegisterPage;
