import { useState } from 'react';
import { AddCompletePage } from './AddCompletePage';
import { AddFormPage } from './AddFormPage';
import { PAGE } from '../../constants';

export const AddCardPage = (props) => {
  const { route, setRoute, initialCardInfo, cardInfo, setCardInfo } = props;
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
        />
      )}
    </>
  );
};
