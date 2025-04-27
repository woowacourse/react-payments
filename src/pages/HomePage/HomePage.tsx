import { useEffect } from 'react';
import CardNumbersInput from '../../components/CardNumbersInput/CardNumbersInput';
import CardExpiryInput from '../../components/CardExpiryInput/CardExpiryInput';
import CVCInput from '../../components/CVCInput/CVCInput';
import CardPreview from '../../components/CardPreview/CardPreview';
import CardBrandInput from '../../components/CardBrandInput/CardBrandInput';
import CardPasswordInput from '../../components/CardPasswordInput/CardPasswordInput';
import Button from '../../components/common/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../App.css';
import { useCardFormContext } from '../../context/CardFormContext';

const HomePage = () => {
  const { cardNumbers, brand, resetForm } = useCardFormContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      cardNumbers,
      brand,
    };
    navigate('/react-payments/complete', { state: formData });
  };

  useEffect(() => {
    resetForm();
  }, [location.state]);

  return (
    <div className="app">
      <CardPreview />
      <form onSubmit={handleSubmit}>
        <CardPasswordInput />
        <CVCInput />
        <CardExpiryInput />
        <CardBrandInput />
        <CardNumbersInput />
        <Button text="확인" />
      </form>
    </div>
  );
};

export default HomePage;
