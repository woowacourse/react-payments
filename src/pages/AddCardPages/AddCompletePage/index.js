import React from 'react';
import './style.css';
import { Card, CreditCard, Text } from '../../../components';
import { CardNicknameForm } from './CardNicknameForm';

const CreditCardPreview = () => {
  return (
    <div className="CreditCardPreview">
      <Card backgroundColor="#94DACD" boxShadow size="large">
        <CreditCard
          cardCompany="로이드카드"
          cardNumber="1111 2222 3333 4444"
          expirationDate="MM/YY"
          ownerName="SUN"
        />
      </Card>
    </div>
  );
};

export const AddCompletePage = (props) => {
  const { setRoute } = props;

  return (
    <div>
      <Text className="AddCompletePage__Text" fontSize="1.5rem">
        카드등록이 완료되었습니다.
      </Text>
      <CreditCardPreview />
      <CardNicknameForm setRoute={setRoute} />
    </div>
  );
};
