import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import CardPreviewSection from './components/CardPreviewSection/CardPreviewSection';
import InfoInputSection from './components/InfoInputSection/InfoInputSection';
import {useCardNumbers} from './hooks/useCardNumbers';
import {useExpiryDate} from './hooks/useExpiryDate';
import {useCvcNumber} from './hooks/useCvcNumber';
import {CARD_COMPANIES} from './domain/cardCompany';
import type {CardCompanyType} from './domain/cardCompany';
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
      </Container>
      {isFormComplete && (
        <SubmitButton
          onClick={() =>
            navigate('/complete', {
              state: {
                cardPrefix: numberField.cardNumbers[0],
                companyName: selectedCompany ? CARD_COMPANIES[selectedCompany].name : '',
              },
            })
          }
        >
          확인
        </SubmitButton>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding-bottom: 64px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 376px;
`;

const SubmitButton = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  border: none;
  cursor: pointer;
`;

export default CardRegisterPage;
