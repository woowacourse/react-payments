import React from 'react';
import './style.css';
import { Card, CreditCard, Text } from '../../../components';
import { CardNicknameForm } from './CardNicknameForm';

export const AddCompletePage = (props) => {
  const {
    setRoute,
    cardCompany,
    cardNumberInString,
    expirationDateInString,
    ownerNameInString,
    setNickname,
    nickname,
    initialState,
  } = props;

  return (
    <div>
      <Text className="AddCompletePage__Text" fontSize="1.5rem">
        카드등록이 완료되었습니다.
      </Text>
      <CreditCardPreview
        cardCompany={cardCompany}
        cardNumberInString={cardNumberInString}
        expirationDateInString={expirationDateInString}
        ownerNameInString={ownerNameInString}
      />
      <CardNicknameForm
        setRoute={setRoute}
        nickname={nickname}
        setNickname={setNickname}
        initialState={initialState}
      />
    </div>
  );
};

function CreditCardPreview(props) {
  const { cardCompany, cardNumberInString, expirationDateInString, ownerNameInString } = props;

  return (
    <div className="CreditCardPreview CreditCardPreview--large">
      <Card backgroundColor={cardCompany.color} boxShadow size="medium">
        <CreditCard
          cardCompany={cardCompany.name}
          cardNumber={cardNumberInString}
          expirationDate={expirationDateInString}
          ownerName={ownerNameInString}
        />
      </Card>
    </div>
  );
}
