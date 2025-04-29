import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Preview from '../components/Preview';
import NumberInputs from '../components/NumberInputs';
import BrandSelect from '../components/BrandSelect';
import ExpiryDateInputs from '../components/ExpiryDateInputs';
import CVCNumberInput from '../components/CVCNumberInput';
import PasswordInput from '../components/PasswordInput';
import SubmitButton from '../components/common/SubmitButton';
import { useNumbersContext } from '../contexts/NumbersContext';
import { useBrandContext } from '../contexts/BrandContext';
import useSequentialReveal from '../hooks/useSequentialReveal';

const HomePage = () => {
  const navigate = useNavigate();
  const { numberFields } = useNumbersContext();
  const { brand } = useBrandContext();
  const { revealFlags } = useSequentialReveal();

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
          {revealFlags[4] && <PasswordInput />}
          {revealFlags[3] && <CVCNumberInput />}
          {revealFlags[2] && <ExpiryDateInputs />}
          {revealFlags[1] && <BrandSelect />}
          {revealFlags[0] && <NumberInputs />}
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
