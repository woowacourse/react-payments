import { FormEvent, useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Preview from '../components/Preview';
import NumberInputs from '../components/NumberInputs';
import BrandSelect from '../components/BrandSelect';
import ExpiryDateInputs from '../components/ExpiryDateInputs';
import CVCNumberInput from '../components/CVCNumberInput';
import PasswordInput from '../components/PasswordInput';
import SubmitButton from '../components/common/SubmitButton';
import { useCardForm } from '../contexts/CardFormContext';
import useSequentialReveal from '../hooks/useSequentialReveal';

const HomePage = () => {
  const navigate = useNavigate();
  const {
    numberFields,
    brand,
    expiryFields,
    cvcField,
    numberInputRefs,
    expiryInputRefs,
    cvcInputRef,
    passwordInputRef,
    brandSelectRef,
  } = useCardForm();

  const numberComplete = numberFields.every(
    (f) => !f.hasError && f.value.length === f.maximumLength
  );
  const brandComplete = brand !== '';
  const expiryComplete = expiryFields.every(
    (f) => !f.hasError && f.value.length === f.maximumLength
  );
  const cvcComplete =
    !cvcField.hasError && cvcField.value.length === cvcField.maximumLength;

  const revealTriggers = [
    true,
    numberComplete,
    brandComplete,
    expiryComplete,
    cvcComplete,
  ];

  const showFlags = useSequentialReveal(revealTriggers, 0);
  const prevShowFlagsRef = useRef<boolean[]>(showFlags);

  useLayoutEffect(() => {
    const prevShowFlags = prevShowFlagsRef.current;
    const newlyOpenedIndex = showFlags.findIndex(
      (isVisible, idx) => isVisible && !prevShowFlags[idx]
    );

    if (newlyOpenedIndex !== -1) {
      switch (newlyOpenedIndex) {
        case 0:
          numberInputRefs[0].current?.focus();
          break;
        case 1:
          brandSelectRef.current?.focus();
          break;
        case 2:
          expiryInputRefs[0].current?.focus();
          break;
        case 3:
          cvcInputRef.current?.focus();
          break;
        case 4:
          passwordInputRef.current?.focus();
          break;
      }
    }

    prevShowFlagsRef.current = showFlags;
  }, [showFlags]);

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
          {showFlags[4] && <PasswordInput />}
          {showFlags[3] && <CVCNumberInput />}
          {showFlags[2] && <ExpiryDateInputs />}
          {showFlags[1] && <BrandSelect />}
          {showFlags[0] && <NumberInputs />}
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
