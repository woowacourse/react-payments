import React from 'react';
import { Button, Card, CreditCard, Title } from '../../../components';
import { CardInfoForm } from './CardInfoForm';
import { CardCompanySelectModal } from './CardCompanySelectModal';
import './style.css';

const BackwardButton = () => {
  const size = 16;
  const color = '#525252';

  return (
    <Button theme="backward" onClick={() => {}}>
      <svg viewBox={`0 0 ${size} ${size}`} height={size} width={size} fill="none">
        <path d="M8.30426 1L1.36476 8.78658L9.15134 15.7261" stroke={color} strokeWidth="1.5" />
      </svg>
    </Button>
  );
};

const CreditCardPreview = () => {
  return (
    <div className="CreditCardPreview">
      <Card backgroundColor="#94DACD" boxShadow size="medium">
        <CreditCard
          cardCompany="로이드카드"
          cardNumber="1111 2222 3333 4444"
          expirationDate="04/21"
          ownerName="SUN"
        />
      </Card>
    </div>
  );
};

export const AddFormPage = (props) => {
  const { setRoute } = props;

  return (
    <>
      <div className="AddFormPage">
        <div className="AddFormPage__Title">
          <BackwardButton />
          <Title>카드 추가</Title>
        </div>
        <CreditCardPreview />
        <CardInfoForm setRoute={setRoute} />
      </div>
      <CardCompanySelectModal />
    </>
  );
};
