import Preview from '../components/Preview';
import BrandSelect from '../components/BrandSelect';
import NumberInputs from '../components/NumberInputs';
import ExpirationPeriodInputs from '../components/ExpirationPeriodInputs';
import CVCNumberInput from '../components/CVCNumberInput';
import PasswordInput from '../components/PasswordInput';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../components/common/SubmitButton';
import { useCardForm } from '../contexts/CardFormContext';
import { FormEvent } from 'react';

const HomePage = () => {
  const navigate = useNavigate();
  const { numberFields, brand } = useCardForm();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams({
      number: numberFields[0].value,
      brand,
    });
    navigate(`/complete?${params.toString()}`);
  };

  return (
    <>
      <Preview />

      <form onSubmit={onSubmit}>
        <Column>
          <PasswordInput />
          <CVCNumberInput />
          <ExpirationPeriodInputs />
          <BrandSelect />
          <NumberInputs />
        </Column>
        <SubmitButton />
      </form>
    </>
  );
};

export default HomePage;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 0 28px;
`;
