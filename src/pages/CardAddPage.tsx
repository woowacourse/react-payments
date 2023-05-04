import { useEffect } from 'react';
import { useModalContext } from '@ashleysyheo/react-modal';
import CardAddForm from '../components/CardAddForm/CardAddForm';
import CardItem from '../components/CardItem/CardItem';
import Header from '../components/common/Header/Header';
import { useCardAddForm } from '../hooks/cards/useCardAddForm';
import SpinnerContainer from '../components/common/SpinnerContainer/SpinnerContainer';

const CardAddPage = () => {
  const { resetModal } = useModalContext();
  const {
    cardInformation,
    inputError,
    isRegistering,
    updateInputValue,
    updateInputError,
    handleSubmit,
  } = useCardAddForm();

  useEffect(() => {
    return () => resetModal();
  }, [resetModal]);

  return (
    <>
      {isRegistering ? (
        <SpinnerContainer message="카드 등록 중입니다" />
      ) : (
        <>
          <Header content="카드 추가" isOverlayPage />
          <main>
            <CardItem
              className="mg-b-24 center-hoz-item"
              issuer={cardInformation.issuer}
              cardNumber={cardInformation.cardNumber}
              expirationDate={cardInformation.expirationDate}
              ownerName={cardInformation.ownerName}
            />
            <CardAddForm
              cardInformation={cardInformation}
              cardInputError={inputError}
              updateInputValue={updateInputValue}
              updateInputError={updateInputError}
              handleSubmit={handleSubmit}
            />
          </main>
        </>
      )}
    </>
  );
};

export default CardAddPage;
