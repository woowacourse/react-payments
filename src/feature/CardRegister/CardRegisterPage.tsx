import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import CardPreviewSection from './components/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/InfoInputSection/InfoInputSection';
import {useCardNumbers} from './hooks/useCardNumbers';
import {useExpiryDate} from './hooks/useExpiryDate';
import {useCvcNumber} from './hooks/useCvcNumber';
import type {CardCompanyType} from './domain/cardPolicy';
import styled from 'styled-components';

const CardRegisterPage = () => {
  const numberField = useCardNumbers();
  const expiryField = useExpiryDate();
  const cvcField = useCvcNumber();
  const [selectedCompany, setSelectedCompany] = useState<CardCompanyType | null>(null);
  const navigate = useNavigate();

  const showCompanySelect = numberField.isComplete;
  const showExpiry = showCompanySelect && selectedCompany !== null;
  const showCvc = showExpiry && expiryField.isComplete;
  const isFormComplete = showCvc && cvcField.isComplete;

  return (
    <Wrapper>
      <Container>
        <CardPreviewSection
          cardNumbers={numberField.cardNumbers}
          expiryMonth={expiryField.expiryMonth}
          expiryYear={expiryField.expiryYear}
          selectedCompany={selectedCompany}
        />
        <InfoInputSection
          numberField={numberField}
          expiryField={expiryField}
          cvcField={cvcField}
          selectedCompany={selectedCompany}
          onCompanyChange={setSelectedCompany}
          showCompanySelect={showCompanySelect}
          showExpiry={showExpiry}
          showCvc={showCvc}
        />
        {isFormComplete && (
          <SubmitButton onClick={() => navigate('/complete')}>확인</SubmitButton>
        )}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  max-width: 376px;
  max-height: 700px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default CardRegisterPage;
