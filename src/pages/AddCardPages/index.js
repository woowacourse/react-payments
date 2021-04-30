import { useState } from 'react';
import { AddCompletePage } from './AddCompletePage';
import { AddFormPage } from './AddFormPage';
import { PAGE } from '../../constants';

const initialCardInfo = {
  number: { first: '', second: '', third: '', fourth: '' },
  company: { name: '', color: '' },
  expirationDate: { month: '', year: '' },
  ownerName: '',
  isOwnerNameFilled: false,
  securityCode: '',
  password: { first: '', second: '' },
  nickname: '',
};

export const AddCardPage = (props) => {
  const { route, setRoute, addCardInfoToList } = props;
  const [cardInfo, setCardInfo] = useState(initialCardInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {route === PAGE.ADD_CARD_FORM ? (
        <AddFormPage
          setRoute={setRoute}
          initialCardInfo={initialCardInfo}
          cardInfo={cardInfo}
          setCardInfo={setCardInfo}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      ) : (
        <AddCompletePage
          setRoute={setRoute}
          initialCardInfo={initialCardInfo}
          cardInfo={cardInfo}
          setCardInfo={setCardInfo}
          addCardInfoToList={addCardInfoToList}
        />
      )}
    </>
  );
};
