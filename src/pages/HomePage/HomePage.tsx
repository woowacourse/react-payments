import { useEffect, useState } from 'react';
import CardNumbersInput from '../../components/CardNumbersInput/CardNumbersInput';
import CardExpiryInput from '../../components/CardExpiryInput/CardExpiryInput';
import CVCInput from '../../components/CVCInput/CVCInput';
import CardPreview from '../../components/CardPreview/CardPreview';
import CardBrandInput from '../../components/CardBrandInput/CardBrandInput';
import { CARD_VALIDATION_INFO } from '../../constants/cardValidationInfo';
import CardPasswordInput from '../../components/CardPasswordInput/CardPasswordInput';
import Button from '../../components/common/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../App.css';

const HomePage = () => {
  const [cardNumbers, setCardNumbers] = useState(
    Array(CARD_VALIDATION_INFO.TOTAL_CARD_INPUTS).fill('')
  );
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [CVC, setCVC] = useState('');
  const [brand, setBrand] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      cardNumbers,
      month,
      year,
      CVC,
      brand,
      password,
    };
    navigate('/react-payments/complete', { state: formData });
  };

  const resetForm = () => {
    setCardNumbers(['', '', '', '']);
    setMonth('');
    setYear('');
    setCVC('');
    setBrand('');
    setPassword('');
  };

  useEffect(() => {
    resetForm();
  }, [location.state]);

  return (
    <div className="app">
      <CardPreview
        cardNumbers={cardNumbers}
        month={month}
        year={year}
        brand={brand}
      />
      <form onSubmit={handleSubmit}>
        <CardNumbersInput
          cardNumbers={cardNumbers}
          setCardNumbers={setCardNumbers}
        />
        <CardBrandInput brand={brand} setBrand={setBrand} />
        <CardExpiryInput
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
        />
        <CVCInput CVC={CVC} setCVC={setCVC} />
        <CardPasswordInput password={password} setPassword={setPassword} />
        <Button text="확인" />
      </form>
    </div>
  );
};

export default HomePage;
