import { useState } from 'react';
import { AddCompletePage } from './AddCompletePage';
import { AddFormPage } from './AddFormPage';
import { PAGE } from '../../constants';

const initialState = {
  cardCompany: { name: '', color: '' },
  cardNumber: '',
  expirationDate: 'MM/YY',
  ownerName: 'NAME',
  securityCode: '',
  password: '',
  isModalOpen: false,
};

export const AddCardPage = (props) => {
  const { route, setRoute } = props;
  const [cardCompany, setCardCompany] = useState(initialState.cardCompany);
  const [cardNumberInString, setCardNumberInString] = useState(initialState.cardNumber);
  const [expirationDateInString, setExpirationDateInString] = useState(initialState.expirationDate);
  const [ownerNameInString, setOwnerNameInString] = useState(initialState.ownerName);
  const [securityCodeInString, setSecurityCodeInString] = useState(initialState.securityCode);
  const [passwordInString, setPasswordInString] = useState(initialState.password);
  const [isModalOpen, setIsModalOpen] = useState(initialState.isModalOpen);

  return (
    <>
      {route === PAGE.ADD_CARD_FORM ? (
        <AddFormPage
          setRoute={setRoute}
          initialState={initialState}
          cardCompany={cardCompany}
          setCardCompany={setCardCompany}
          cardNumberInString={cardNumberInString}
          setCardNumberInString={setCardNumberInString}
          expirationDateInString={expirationDateInString}
          setExpirationDateInString={setExpirationDateInString}
          ownerNameInString={ownerNameInString}
          setOwnerNameInString={setOwnerNameInString}
          securityCodeInString={securityCodeInString}
          setSecurityCodeInString={setSecurityCodeInString}
          passwordInString={passwordInString}
          setPasswordInString={setPasswordInString}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : (
        <AddCompletePage
          setRoute={setRoute}
          cardCompany={cardCompany}
          cardNumberInString={cardNumberInString}
          expirationDateInString={expirationDateInString}
          ownerNameInString={ownerNameInString}
        />
      )}
    </>
  );
};
